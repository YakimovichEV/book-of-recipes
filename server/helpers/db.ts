import { MikroORM } from "@mikro-orm/core";
import microConfig from "../mikro-orm.config";

export const getMikro = async () => {
    return await MikroORM.init(microConfig);
};
