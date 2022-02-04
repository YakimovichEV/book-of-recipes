import { MikroORM } from "@mikro-orm/core";
import microConfig from "../mikro-orm.config";

export const getMikro = (() => {
    let orm: ReturnType<typeof MikroORM["init"]>;
    return async () => {
        if (!orm) {
            orm = MikroORM.init(microConfig);
        }

        return orm;
    };
})();
