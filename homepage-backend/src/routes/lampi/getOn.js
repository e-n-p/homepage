import LogSys from '../../logging';

const logger = new LogSys(__filename);

export const getSwitchRoute = {
    method: 'Get',
    path: '/api/switch',
    handler: (req, h) => {
    //     const { exec } = require('child_process');
    //     exec('/var/www/homepage/scripts/lightSwitch.sh', (err, stdout, stderr) => {
    //         if (err) {
    //             logger.log(err, true);
    //             return "1"
    //         } else {
    //             logger.log("lamp switched")
    //             logger.log(`stdout: ${stdout}`);
    //             logger.log(`stderr: ${stderr}`);
    //         }
    //     })
    //     return "0"
    // }
        const http = require("http")
        http.get("http://192.168.1.42:5000/on", res=> {
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