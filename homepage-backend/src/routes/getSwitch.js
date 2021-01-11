
export const getSwitchRoute = {
    method: 'Get',
    path: '/api/switch',
    handler: (req, h) => {
        const { exec } = require('child_process');
        exec('/var/www/homepage/scripts/lightSwitch.sh', (err, stdout, stderr) => {
            if (err) {
                console.log(err);
                return "1"
            } else {
                console.log("lamp switched")
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
            }
        })
        return "0"
    }
}