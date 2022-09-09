import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";

import { Layout } from "components/Layout/Layout";
import { useApollo } from "../client/hocs/apollo/client";

import "react-toastify/dist/ReactToastify.css";

import "/styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const apolloClient = useApollo(pageProps);

    return (
        <SessionProvider session={session}>
            <ApolloProvider client={apolloClient}>
                <ThemeProvider enableSystem={true} attribute="class">
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
                        <ToastContainer />
                    </Layout>
                </ThemeProvider>
            </ApolloProvider>
        </SessionProvider>
    );
}

export default appWithTranslation(MyApp);
