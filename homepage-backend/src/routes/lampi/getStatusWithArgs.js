import LogSys from '../../logging';
import {configs} from '../../server';

const logger = new LogSys(__filename);

export const getStatusWithArgsRoute = {
    method: 'GET',
    path: '/api/statusWithArgs',
    handler: async (req, h) => {
        let options = {
            hostname: configs.LAMPI,
            port: "5000",
            path: "/getStatusWithArgs",
            method: "GET"
        }
        var result = await getStatusWArgsRequest(options)
        logger.log("passing to FE: " + result)
        return result

    }
}

function getStatusWArgsRequest(options){
    return new Promise(function(resolve, reject) {
        const http = require("http")
        var request = http.request(options, res => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                logger.log("status code error, " + res.statusCode)
                return reject(new Error('statusCode=' + res.statusCode))
            }
            var response = ""
            res.on('data', function(data) {
                response += data
            })
            res.on('end', function() {
                logger.log("getStatusWithArgs response " + response)
                resolve(response)
            })
        })
        request.on('error', function(err) {
            logger.log("request failed: " + err, true)
            if (err.toString().includes("ECONNREFUSED")) {
                resolve(1)
            }
            reject(err)
        })
        request.end()
    })
}
