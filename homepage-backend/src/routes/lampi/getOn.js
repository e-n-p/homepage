import LogSys from '../../logging';
import {configs} from '../../server';

const logger = new LogSys(__filename);

export const getOnRoute = {
    method: 'GET',
    path: '/api/on',
    handler: async (req, h) => {
        let options = {
            hostname: configs.LAMPI,
            port: "5000",
            path: "/on",
            method: "GET"
        }
        let result = await getOnRequest(options)
        logger.log("passing to FE: " + result)
        return result

    }
}

function getOnRequest(options){
    return new Promise(function(resolve, reject) {
        const http = require("http")
        let request = http.request(options, res => {
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