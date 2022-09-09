declare module "*.gql" {
    import { DocumentNode } from "graphql";
    const Schema: DocumentNode;

    export = Schema;
}

declare module "img";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
