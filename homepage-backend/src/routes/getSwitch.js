import LogSys from '../logging';

const logger = new LogSys(__filename);

export const getSwitchRoute = {
    method: 'Get',
    path: '/api/switch',
    handler: (req, h) => {
        const { exec } = require('child_process');
        exec('/var/www/homepage/scripts/lightSwitch.sh', (err, stdout, stderr) => {
            if (err) {
                logger.log(err, true);
                return "1"
            } else {
                logger.log("lamp switched")
                logger.log(`stdout: ${stdout}`);
                logger.log(`stderr: ${stderr}`);
            }
        })
        return "0"
    }
}