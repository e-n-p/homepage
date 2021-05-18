import LogSys from '../../logging';

const logger = new LogSys(__filename);

export const postOnSolidRoute = {
    method: 'Post',
    path: '/api/onSolid',
    handler: (req, h) => {
        const { colourIn = '', intensityIn='' } = req.payload;
        const http = require("http")

        let body = JSON.stringify({
            colour: colourIn,
            intensity: intensityIn,
        })

        let options = {
            hostname: "http://192.168.0.11:5000",
            path: "/onSolid",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(body)
            }
        }

        http.request(options, res=> {
            let data = ""
            res.on('data', d=> {
                logger.log(data)
            })
            res.on('end', ()=> {
                logger.log("request ended")
            })
        }).on("error", logger.log("onSolid failed", true)).end(body)
        return "0"
    }
}
