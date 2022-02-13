const watchlist = []
let globalId = 1

module.exports = {
    addItem: (req, res) => {
        const {name, priority} = req.body

        let newItem = {
            name, 
            priority,
            id: globalId
        }

       watchlist.push(newItem)

        res.status(200).send(watchlist)
        globalId++
    },
    deleteItem: (req, res) => {
        const {id} = req.params

        const index = watchlist.findIndex(e => e.id === +id)

        watchlist.splice(index, 1)

        res.status(200).send(watchlist)
    }
}