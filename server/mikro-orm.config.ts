import { MikroORM } from "@mikro-orm/core";
import { appConfig } from "../shared/config";
import { User } from "./entities/User";

export default {
    entities: [User],
    dbName: "book-of-recipes",
    type: "mongo",
    clientUrl: appConfig.MONGODB_URL,
    debug: !appConfig.IS_PRODUCTION,
} as Parameters<typeof MikroORM.init>[0];
