const mcache = require("memory-cache");


var cache = (duration) => {
    return (req, res, next) => {
        let key = "cache" +  req.url
        let cachedBody = mcache.get(key)
        if (cachedBody) {
            res.send(cachedBody)
            console.log("soy la key por acaaa", key)
            return
        } else {
            res.sendResponse = res.send
            res.send = (body) => {
                mcache.put(key, body, duration * 1000);
                res.sendResponse(body)
            }
            console.log(" recien salido del horno", cachedBody) 
            next()

        }

    }

}
//-- Importante: los métodos PUT, DELETE y POST nunca se deben almacenar en caché.


module.exports = {cache}