let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        let { text, time } = req.body;
        let message = {
            id: id,
            text: text,
            time: time
        };
        messages.push(message);
        id++
        res.status(200).send(messages)
        },
        read: (req, res) => {
            res.status(200).send(messages);
        },
        update: (req, res) => {
            const { text } = req.body;
            const uId = req.params.id;
            const messageIndex = messages.findIndex(m => m.id == uId)
            let message = messages[messageIndex]
            messages[messageIndex] = {
                id: message.id,
                text: text || message.text,
                time: message.time
            };
            res.status(200).send(messages);
        },
        delete: (req, res) => {
            const dIndex = req.params.id;
            messageIndex = messages.findIndex(m => m.id === dIndex)
            messages.splice(messageIndex, 1);
            res.status(200).send(messages);
        }
}