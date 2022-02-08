import { QueryResolvers } from "../../../generated/graphql";
import { Category } from "../../../entities/Category";

export const getCategory: QueryResolvers["getCategory"] = async (
    _root,
    _args,
    { em },
) => {
    const category = await em.findOne(Category, {
        id: "61ffaa13901cf912d039b295",
    });

    return category as Category;
};
