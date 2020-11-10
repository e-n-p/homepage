
export const getSwitchRoute = {
	method: 'Get',
	path: '/api/switch',
	handler: (req, h) => {
		const { exec } = require('child_process');
		exec('sudo /var/www/homepageServer/scripts/lightSwitch.sh', (err, stdout, stderr) => {
			if (err) {
				console.log(err);
				return "1"
			} else {
				console.log("lamp switched")
			}
		})
		return "0"		
	}
}