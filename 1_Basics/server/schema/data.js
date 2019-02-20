const authors = [
    { name: "Patrick Rothfuss", age: 44, id: "1" },
    { name: "Brandon Sanderson", age: 42, id: "2" },
    { name: "Terry Pratchett", age: 66, id: "3" }
];

const books = [
    {
        id: "1",
        name: "Name of the Wind",
        genre: "Fantasy",
        authorId: "1"
    },
    {
        id: "2",
        name: "The Final Empire",
        genre: "Fantasy",
        authorId: "2"
    },
    {
        id: "3",
        name: "The Long Earth",
        genre: "Sci-Fi",
        authorId: "3"
    },
    {
        id: "4",
        name: "The hero of Ages",
        genre: "Fantasy",
        authorId: "2"
    },
    {
        id: "5",
        name: "The Color of Magic",
        genre: "Fantasy",
        authorId: "3"
    },
    {
        id: "6",
        name: "The Light Fantastic",
        genre: "Fantasy",
        authorId: "3"
    }
];

module.exports = {
    authors,
    books
};
