const graphql = require("graphql");

const { GraphQLObjectTpye, GraphQLString } = graphql;

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        genre: {
            type: GraphQLString
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            // name of the query
            type: BookType, // the node on which the query will be made
            args: {
                // arguments to be passed along with the query
                id: {
                    // the id of the book
                    type: GraphQLString
                }
            },
            resolve(parent, args) {}
        }
    }
});
