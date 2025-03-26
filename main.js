import express from "express";

const app = express();
const PORT = 1348;

app.get('/', (req, res) => {
    res.json({ msg: "Hello Everyone" })
})

app.listen(PORT, () => {
    console.log(`The Server is running at http://localhost:${PORT}`);
})