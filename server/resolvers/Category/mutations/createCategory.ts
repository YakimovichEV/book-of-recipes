import { MutationResolvers } from "../../../generated/graphql";
import { Category } from "../../../entities/Category";

export const createCategory: MutationResolvers["createCategory"] = async (
    _root,
    { category },
    { em },
) => {
    const categoryEntity = new Category(category);

    await em.persistAndFlush(categoryEntity);

    return true;
};
