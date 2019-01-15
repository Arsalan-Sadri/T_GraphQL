const data = require("./data.js");
const _ = require("lodash");
const graphql = require("graphql");
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt
} = graphql;

// Name of the variable (node) used in this code
const BookType = new GraphQLObjectType({
    // Name of the node available to users
    name: "Book",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        genre: {
            type: GraphQLString
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    })
});

// Name of the variable (query) used in this code
const RootQueryType = new GraphQLObjectType({
    // Name of the query available to users
    name: "RootQuery",
    // Here we define all query functions (CRUD) along with their
    // names, types, arguments/parameters, and resolve function
    fields: {
        // Name of the query function to be used, e.g. book(), getBook(), or findBook()
        book: {
            // The node on which the query will be made
            type: BookType,
            // Arguments to be passed along with the query function
            args: {
                // ID of the book
                id: {
                    type: GraphQLID
                }
            },
            // The resolve function is fired when query is run
            resolve(parent, args) {
                return _.find(data.books, { id: args.id });
            }
        },
        author: {
            type: AuthorType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return _.find(data.authors, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    // which query is available to users to use
    query: RootQueryType
});
