import LogSys from '../../logging'
import {configs} from '../../server';

const logger = new LogSys(__filename)

export const postOnBannerRoute = {
    method: 'POST',
    path: '/api/onBanner',
    handler: async (req, h) => {
        logger.log("calling onBanner")
        const colourOneIn = Array.from(req.payload.colourOne)
        const colourTwoIn = Array.from(req.payload.colourTwo)
        const intensityIn = req.payload.intensity
        logger.log("colours, " + colourOneIn + ", " + colourTwoIn)
        logger.log("intensity, " + intensityIn)
        let body = JSON.stringify({
            colours: {
                firstColour: colourOneIn,
                secondColour: colourTwoIn
            },
            intensity: intensityIn,
        })
        logger.log("post body--- " + String(body))

        let options = {
            hostname: configs.LAMPI,
            port: "5000",
            path: "/onBanner",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(body)
            }
        }
        var result = await bannerRequest(options, body)
        return result
    }
}

function bannerRequest(options, body){
    return new Promise(function(resolve, reject) {
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
                logger.log("onBanner response " + response)
                resolve(response)
            })
            return response
        })
        request.on('error', (err) => {
            logger.log("onSolid failed, " + err)
            reject(err)
        })
        request.write(body)
        request.end()
    })
}
