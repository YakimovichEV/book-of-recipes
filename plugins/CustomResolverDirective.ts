import { GraphQLSchema, ObjectTypeDefinitionNode } from "graphql";

module.exports = {
    plugin(schema: GraphQLSchema) {
        const typesMap = schema.getTypeMap();
        const customFields: Record<string, string[]> = {};

        Object.entries(typesMap).filter(([typeName]) => {
            const type = typesMap[typeName];
            const { astNode } = type;

            (astNode as ObjectTypeDefinitionNode)?.fields?.forEach((field) =>
                field.directives?.forEach((d) => {
                    if (d.name.value === "CustomResolver") {
                        const type = astNode!.name.value;

                        const fieldName = field.name.value;

                        if (customFields[type]) {
                            customFields[type].push(fieldName);
                        } else {
                            customFields[type] = [fieldName];
                        }
                    }
                }),
            );

            return true;
        });

        const generatedString = Object.entries(customFields).map(
            ([type, fields]) =>
                `${type}: GenerateResolverType<"${type}", ${fields
                    .map((f) => `"${f}"`)
                    .join(" | ")}>;`,
        );

        return `
            type GenerateResolverType<
                T extends keyof Required<Resolvers>,
                K extends keyof Required<Resolvers>[T],
            > = NonNullable<
                // eslint-disable-next-line @typescript-eslint/ban-types
                Pick<Required<Required<Resolvers>[T]> & {}, K>
            >;

            export type MyResolvers = Resolvers ${
                generatedString
                    ? `& {
                ${generatedString.join("\n")}
            };`
                    : ""
            }
            `;
    },
    addToSchema: /* GraphQL */ `
        directive @CustomResolver on FIELD_DEFINITION
    `,
};
