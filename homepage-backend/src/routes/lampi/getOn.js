import LogSys from '../../logging';
import {configs} from '../../server';

const logger = new LogSys(__filename);

export const getOnRoute = {
    method: 'Get',
    path: '/api/on',
    handler: (req, h) => {
        const http = require("http")
        var request = http.get(`http://${configs.LAMPI}:5000/on`, res=> {
            let data = ""
            res.on('data', d=> {
                logger.log(data)
            })
            res.on('end', ()=> {
                logger.log("request ended")
            })
        })
        request.on('error', (err)=> {
            logger.log("request failed -" + err, true)
        })
        return "0"
    }
}
