import { MutationResolvers } from "../../../generated/graphql";
import { Category } from "../../../entities/Category";
import { UserInputError } from "apollo-server-micro";

export const createOrUpdateCategory: MutationResolvers["createOrUpdateCategory"] =
    async (_root, { category, categoryId }, { em }) => {
        if (categoryId) {
            await em.nativeUpdate(Category, { id: categoryId }, category);

            const categoryEntity = await em.findOne(Category, {
                id: categoryId,
            });

            if (!categoryEntity) {
                throw new UserInputError("Error. Cancel?");
            }

            return categoryEntity;
        }

        const categoryEntity = new Category(category);

        await em.persistAndFlush(categoryEntity);

        return categoryEntity;
    };
