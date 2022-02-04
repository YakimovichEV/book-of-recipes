const { printSchemaWithDirectives } = require("@graphql-tools/utils");

module.exports = {
    plugin: (schema, documents, config) => {
        return [
            'import gql from "graphql-tag";',
            "",
            "export const typeDefs = gql`",
            printSchemaWithDirectives(schema),
            "`;",
            "",
        ].join("\n");
    },
};
