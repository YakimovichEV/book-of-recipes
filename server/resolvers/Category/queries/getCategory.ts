import { QueryResolvers } from "../../../generated/graphql";
import { Category } from "../../../entities/Category";

//@ts-expect-error We resolve some of the fields separately
export const getCategory: QueryResolvers["getCategory"] = async (
    _root,
    { categoryId },
    { em },
) => {
    return em.findOne(Category, {
        id: categoryId,
    });
};
