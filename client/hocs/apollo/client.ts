import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
    NormalizedCacheObject,
} from "@apollo/client";
import merge from "deepmerge";
import isEqual from "lodash.isequal";
import { useMemo } from "react";
import { onError } from "apollo-link-error";
import { getSavedToken } from "server/helpers/auth";
import { setContext } from "@apollo/client/link/context";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const cleanTypeName = new ApolloLink((operation, forward) => {
    if (operation.variables) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const omitTypename = (key: string, value: any) =>
            key === "__typename" ? undefined : value;
        operation.variables = JSON.parse(
            JSON.stringify(operation.variables),
            omitTypename,
        );
    }
    return forward(operation).map((data) => {
        return data;
    });
});

const authLink = setContext(async (_, { headers }) => {
    const token = getSavedToken();

    return {
        headers: {
            ...headers,
            ["authorization"]: token ? `Bearer ${token}` : "",
        },
    };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
    uri: `http://localhost:3000/api/graphql`,
});

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        cache: new InMemoryCache(),
        headers: {
            ["authorization"]: "more headers",
        },
        link: ApolloLink.from([
            cleanTypeName,
            errorLink as unknown as ApolloLink,
            authLink.concat(httpLink),
        ]),
    });
}

export function initializeApollo(
    initialState: NormalizedCacheObject | null = null,
) {
    const _apolloClient = apolloClient ?? createApolloClient();

    if (initialState) {
        const existingCache = _apolloClient.extract();

        const data = merge(initialState, existingCache, {
            arrayMerge: (destinationArray, sourceArray) => [
                ...sourceArray,
                ...destinationArray.filter((d) =>
                    sourceArray.every((s) => !isEqual(d, s)),
                ),
            ],
        });

        _apolloClient.cache.restore(data);
    }

    if (typeof window === "undefined") return _apolloClient;

    if (!apolloClient) apolloClient = _apolloClient;

    return _apolloClient;
}

export function addApolloState(
    client: ApolloClient<NormalizedCacheObject>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pageProps: any,
) {
    if (pageProps?.props) {
        pageProps.props["__APOLLO_STATE__"] = client.cache.extract();
    }

    return pageProps;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useApollo(pageProps: any) {
    const state = pageProps["__APOLLO_STATE__"];
    const store = useMemo(() => initializeApollo(state), [state]);
    return store;
}
