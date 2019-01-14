const app = require("express")();
const graphqlHTTP = require("express-graphql");
const MyGraphQLSchema = require("./schema/schema");

app.use("/graphql", graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true

}));

const PORT = process.env.PORT || 8080;
const host = "localhost";
app.listen(PORT, host, () => console.log(`App is running on http://${host}:${PORT}`));
