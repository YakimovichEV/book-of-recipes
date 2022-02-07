import { MikroORM } from "@mikro-orm/core";
import { appConfig } from "../shared/config";
import { User } from "./entities/User";
import { Recipe } from "./entities/Recipe";
import { Category } from "./entities/Category";

export default {
    entities: [User, Recipe, Category],
    dbName: "book-of-recipes",
    type: "mongo",
    clientUrl: appConfig.MONGODB_URL,
    // debug: !appConfig.IS_PRODUCTION,
} as Parameters<typeof MikroORM.init>[0];
