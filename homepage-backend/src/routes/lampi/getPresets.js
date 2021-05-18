import LogSys from '../../logging';

const logger = new LogSys(__filename);

export const getPresetsRoute = {
    method: 'Get',
    path: '/api/presets',
    handler: (req, h) => {
        const http = require("http")
        http.get("http://192.168.0.11:5000/getPresets", res=> {
            let data = ""
            res.on("data", d=> {
                logger.log(JSON.stringify(data))
            })
            res.on("end", ()=> {
                logger.log("request ended")
            })

        })
        return "0"
    }
}
