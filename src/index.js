const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.send("Bem-vindo a API wFast");
});

const port = 3000;

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});

