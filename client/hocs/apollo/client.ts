import {
    ApolloClient,
    ApolloLink,
    InMemoryCache,
    NormalizedCacheObject,
} from "@apollo/client";
import merge from "deepmerge";
import isEqual from "lodash.isequal";
import { useMemo } from "react";
import { onError } from "apollo-link-error";
import { getSavedToken } from "server/helpers/auth";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import { appConfig } from "shared/config";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

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

const httpLink = createUploadLink({
    uri: `${appConfig.SERVER_URI}/api/graphql`,
});

function createApolloClient() {
    return new ApolloClient({
        ssrMode: appConfig.IS_SERVER,
        cache: new InMemoryCache(),
        link: ApolloLink.from([
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

    if (appConfig.IS_SERVER) return _apolloClient;

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
