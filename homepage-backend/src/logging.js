var fs = require('fs');

export default class LogSys {

    constructor(file){
        this.fileName = file;
    }

    getDate(){
        var datetime = new Date();
        return datetime.toISOString().substring(0,10);
    }

    getTime(){
        var datetime = new Date();
        return datetime.toISOString().substring(0,19)
    }


    writeToFile(message){
        var logStream = fs.createWriteStream(("/var/www/homepage/logs/" + this.getDate()), {flags: 'a'});
        logStream.write(message);
        logStream.end();
    }

    log(message, toConsole){
        this.writeToFile(this.getTime() + "-[" + this.fileName + "]: " + message + "\n");
        if (toConsole){
            console.log(message);
        }
    }

}
