import React from "react";
import Home from "./Home";
import {
    HelloDocument,
    HelloQuery,
    useHelloQuery,
} from "./../client/generated/graphql";
import { addApolloState, initializeApollo } from "client/hocs/apollo/client";
import { GetServerSideProps, NextPage } from "next";

const Index: NextPage = () => {
    const { data } = useHelloQuery();

    return (
        <div className="font-primaryFont text-2xl text-red-500">
            {data?.hello}
            <Home />
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
