import React from "react";
import {
    HelloDocument,
    HelloQuery,
    useHelloQuery,
} from "./../client/generated/graphql";
import { addApolloState, initializeApollo } from "client/hocs/apollo/client";
import { GetServerSideProps, NextPage } from "next";

import Home from "./home";
import Test from "./testPage";

const Index: NextPage = () => {
    const { data } = useHelloQuery();

    return (
        <div className="font-primaryFont text-2xl text-red-500">
            {data?.hello}
            <Home />
            <Test />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const apolloClient = initializeApollo();
    await apolloClient.query<HelloQuery>({
        query: HelloDocument,
    });

    return addApolloState(apolloClient, {
        props: {},
    });
};

export default Index;
