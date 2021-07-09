const fastify = require('fastify')({logger: true});
const items = require('./Items')
const PORT = 999

fastify.get('/items', (req, res) => {
    res.send(items)
})

fastify.get("/items/:id", (req, res) => {

    const {id} = req.params
    const item = items.find(item => item.id === id);
    res.send(item);
});


const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();