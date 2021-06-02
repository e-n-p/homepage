import LogSys from '../../logging';

const logger = new LogSys(__filename);

export const getPresetsRoute = {
    method: 'GET',
    path: '/api/presets',
    handler: async (req, h) => {
        logger.log("calling getPresets")
        const body = await getPresetsRequest();
        return body;
    }
}

function getPresetsRequest(){
    return new Promise(function(resolve, reject) {
        const http = require("http");
        var req = http.get("http://192.168.0.11:5000/getPresets", res=> {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                logger.log("status code error")
                return reject(new Error('statusCode=' + res.statusCode));
            }
            var body = "";
            res.on('data', function(data) {
                body += data;
            });
            res.on('end', function() {
                try {
                    body = JSON.parse(body);
                } catch(e) {
                    logger.log("calling getPresets failed, " + e)
                    reject(e);
                }
                resolve(body);
            });
            return body
        });
        req.on('error', function(err) {
            logger.log("calling getPresets failed, " + err)
            reject(err);
        });
        req.end()
    });
}
