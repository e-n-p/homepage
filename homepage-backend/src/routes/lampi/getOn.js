import LogSys from '../../logging';

const logger = new LogSys(__filename);

export const getOnRoute = {
    method: 'Get',
    path: '/api/on',
    handler: (req, h) => {
        const http = require("http")
        http.get("http://192.168.0.11:5000/on", res=> {
            let data = ""
            res.on('data', d=> {
                logger.log(data)
            })
            res.on('end', ()=> {
                logger.log("request ended")
            })

        })
        return "0"
    }
}
