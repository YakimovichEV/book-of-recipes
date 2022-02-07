import { QueryResolvers } from "../../../generated/graphql";
import { Category } from "../../../entities/Category";

export const getCategory: QueryResolvers["getCategory"] = async (
    _root,
    { categoryId },
    { em },
) => {
    return em.findOne(Category, {
        id: categoryId,
    });
};
