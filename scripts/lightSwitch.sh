#!/bin/sh

        SERVER=`cat /var/www/homepage/scripts/server`
        PASSWORD=`cat /var/www/homepage/scripts/passwrd`
        sshpass -p $PASSWORD ssh $SERVER 'sudo python /home/pi/server/lampSwitch.py &> /dev/null'&
        #ssh $SERVER 'sudo python /home/pi/server/lampSwitch.py &> /dev/null'&

        echo

