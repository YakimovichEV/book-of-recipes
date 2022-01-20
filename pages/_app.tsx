import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import { useApollo } from "../client/hocs/apollo/client";
import Head from "next/head";

import { Layout } from "components/Layout/Layout";

import "/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    const apolloClient = useApollo(pageProps);
    return (
        <ApolloProvider client={apolloClient}>
            <Layout>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta
                        name="description"
                        content="Find a lot of great dishes that allow you enjoy..."
                    />
                    <title>Dishidinio</title>
                </Head>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    );
}

export default MyApp;
