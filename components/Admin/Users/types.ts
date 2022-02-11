import { GetUserListQueryResult } from "../../../client/generated/graphql";

export type User = NonNullable<
    GetUserListQueryResult["data"]
>["getUserList"][number];
