import LogSys from '../../logging';
import {configs} from '../../server';

const logger = new LogSys(__filename);

export const getOffRoute = {
    method: 'GET',
    path: '/api/off',
    handler: async (req, h) => {
        let options = {
            hostname: configs.LAMPI,
            port: "5000",
            path: "/off",
            method: "GET"
        }
        let result = await getOffRequest(options)
        logger.log("passing to FE: " + result)
        return result

    }
}

function getOffRequest(options){
    return new Promise(function(resolve, reject) {
        const http = require("http")
        var request = http.request(options, res=> {
            let data = ""
            res.on('data', d=> {
                logger.log(data)
            })
            res.on('end', ()=> {
                logger.log("request ended")
            })
            resolve(0)
        })
        request.on('error', (err)=> {
            logger.log("request failed: " + err, true)
            if (err.toString().includes("ECONNREFUSED")) {
                resolve(1)
            }
            reject(err)
        })
        request.end()
    })
}
