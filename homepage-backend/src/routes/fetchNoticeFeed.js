import { exec } from 'child_process';
import LogSys from '../logging';

const logger = new LogSys(__filename);

export const noticeFeedRoute = {
    method: 'GET',
    path: '/api/fetchNoticeFeed',
    handler: async (req, h) => {
        return new Promise((resolve, reject) => {
          exec('/usr/bin/python3 /var/www/homepage/notice_feed.py', (error, stdout, stderr) => {
            if (error) {
                logger.log("notice_feed.py: " + error, true);
            }
            if (stderr) {
                logger.log("notice_feed.py stderr: " + stderr, true);
            }
          });

          return h.response({ message: 'Script execution started' }).code(202);
        });
    }
}
