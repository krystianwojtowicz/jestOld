const express = require("express");

const app = express();
const movieRoute = require("./routes/movies.route")
app.use(express.json());
app.use("/api/movies", movieRoute);

const PORT = 8080;

app.listen(PORT, () => {
    console.log('Listening on port: ${PORT}');
});