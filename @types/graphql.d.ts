import { Connection, IDatabaseDriver, EntityManager } from "@mikro-orm/core";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "server/entities/User";

interface ApolloContext {
    req: NextApiRequest;
    res: NextApiResponse;
    em: EntityManager<IDatabaseDriver<Connection>>;
    currentUser: User | null;
}
