import LogSys from '../../logging'

const logger = new LogSys(__filename)

export const postOnSolidRoute = {
    method: 'POST',
    path: '/api/onSolid',
    handler: async (req, h) => {
        logger.log("calling onSolid")
        const colourIn = Array.from(req.payload.colour)
        const intensityIn = req.payload.intensity
        logger.log("colour, " + colourIn)
        logger.log("intensity, " + intensityIn)
        let body = JSON.stringify({
            colour: colourIn,
            intensity: intensityIn,
        })
        logger.log("post body--- " + String(body))

        let options = {
            hostname: "192.168.0.11",
            port: "5000",
            path: "/onSolid",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(body)
            }
        }
        var result = await solidRequest(options, body)
        return result
    }
}


function solidRequest(options, body){
    return new Promise(function(resolve, reject) {
        const http = require("http")
        var request = http.request(options, res => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                logger.log("status code error, " + res.statusCode)
                return reject(new Error('statusCode=' + res.statusCode))
            }
            var response = ""
            res.on('data', function(data) {
                logger.log("got response" + data)
                response += data
            })
            res.on('end', function() {
                logger.log("onSolid response " + response)
                resolve(response)
            })
            return response
        })
        request.on('error', function(err) {
            logger.log("onSolid failed, " + err)
            reject(err)
        })
        request.write(body)
        request.end()
    })
}
