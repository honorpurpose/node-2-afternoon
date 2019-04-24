const express = require("express");

const msg = require("./controllers/messages_controller.js")

const app = express();
app.use(express.json());
app.use(express.static( __dirname + '/../public/build'))

app.get("/api/messages", msg.read);
app.post("/api/messages", msg.create);
app.put("/api/messages/:id", msg.update);
app.delete("/api/messages/:id", msg.delete);

const port = 3001;
app.listen(port, () => {
    console.log(`Listening in on port ${port}`)
})