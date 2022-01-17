import { Connection, IDatabaseDriver } from "@mikro-orm/core";
import { EntityManager } from "@mikro-orm/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

interface ApolloContext {
    req: NextApiRequest;
    res: NextApiResponse;
    em: EntityManager<IDatabaseDriver<Connection>>;
}
