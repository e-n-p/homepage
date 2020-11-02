#!/bin/bash


PID=$(ssh pi@Lampi 'sudo ps -ef | grep "python" | grep "solidPulse"| grep -v "grep"')

echo $PID

if [ -z "$PID" ]
then
#       ssh pi@Lampi -t 'sudo /home/pi/server/solidPulse.py'
        ssh pi@Lampi 'sudo /home/pi/server/tracks/solidPulse0.py &'
        ssh pi@Lampi 'echo -e "\n"'
        exit
        echo "turning on"
else
        ssh pi@Lampi 'sudo /home/pi/server/off.sh'
        echo "turning off"
fi
