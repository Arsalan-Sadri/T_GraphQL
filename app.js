const app = require("express")();

const PORT = process.env.PORT || 8080;
const host = "localhost";
app.listen(PORT, host, () => console.log(`App is running on http://${host}:${PORT}`));
