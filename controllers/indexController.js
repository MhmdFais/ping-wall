const messages = [
    {
        userName: "Bob",
        message: "This is first dummy message",
        added: new Date().toLocaleDateString() 
    },
    {
        userName: "Foo",
        message: "This is secong dummy message",
        added: new Date().toLocaleDateString() 
    }
]

const control = {
    get: (req, res) => {
        res.render("index", {messages: messages})
    }
}

module.exports = {
    control,
    messages
}

