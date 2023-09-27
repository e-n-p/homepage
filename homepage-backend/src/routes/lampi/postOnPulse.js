import LogSys from '../../logging'
import {configs} from '../../server';

const logger = new LogSys(__filename)

export const postOnPulseRoute = {
    method: 'POST',
    path: '/api/onPulse',
    handler: async (req, h) => {
        logger.log("calling onPulse")
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
            hostname: configs.LAMPI,
            port: "5000",
            path: "/onPulse",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(body)
            }
        }
        var result = await pulseRequest(options, body)
        return result
    }
}

function pulseRequest(options, body){
    return new Promise((resolve, reject) => {
        const http = require("http")
        var request = http.request(options, res => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                logger.log("status code error, " + res.statusCode)
                return reject(new Error('statusCode=' + res.statusCode))
            }
            var response = ""
            res.on('data', (data) => {
                response += data
            })
            res.on('end', () => {
                logger.log("onPulse response " + response)
                resolve(response)
            })
        })
        request.on('error', (err) => {
            logger.log("request failed: " + err, true)
            if (err.toString().includes("ECONNREFUSED") || err.toString().includes("EHOSTUNREACH")) {
                resolve(1)
            }
            reject(err)
        })
        request.write(body)
        request.end()
    })
}
