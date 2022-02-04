import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

import { Layout } from "components/Layout/Layout";
import { useApollo } from "../client/hocs/apollo/client";

import "/styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const apolloClient = useApollo(pageProps);

    return (
        <SessionProvider session={session}>
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
        </SessionProvider>
    );
}

export default MyApp;
