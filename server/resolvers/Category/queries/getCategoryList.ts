import { QueryResolvers } from "../../../generated/graphql";
import { Category } from "../../../entities/Category";

const CATEGORIES_PER_PAGE = 10;

export const getCategoryList: QueryResolvers["getCategoryList"] = async (
    _root,
    { search, page },
    { em },
) => {
    return (
        em.find(
            Category,
            {
                ...(search ? { name: new RegExp(search, "i") } : undefined),
            },
            {
                limit: CATEGORIES_PER_PAGE,
                offset: page || 0 * CATEGORIES_PER_PAGE,
            },
        ) || []
    );
};
