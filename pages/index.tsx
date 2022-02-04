import React from "react";
import {
    HelloDocument,
    HelloQuery,
    useHelloQuery,
} from "./../client/generated/graphql";
import { addApolloState, initializeApollo } from "client/hocs/apollo/client";
import { GetServerSideProps, NextPage } from "next";

import Test from "./testPage";
import { signIn } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { getSavedToken } from "server/helpers/auth";

const Index: NextPage = () => {
    const { data, refetch } = useHelloQuery();

    return (
        <div className="font-primaryFont text-2xl text-red-500">
            {data?.hello}
            {/* <Home /> */}
            <button
                onClick={() =>
                    signIn("credentials", {
                        email: "alexandr.kislukhin@gmail.com",
                        password: "123456",
                    })
                }
            >
                Login ||
            </button>
            <button onClick={() => refetch()}> refetch </button>
            <Test />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const token = await getToken({ req: ctx.req, raw: true });
    getSavedToken(token);

    const apolloClient = initializeApollo();
    await apolloClient.query<HelloQuery>({
        query: HelloDocument,
    });

    return addApolloState(apolloClient, {
        props: { session: token },
    });
};
export default Index;
