#!/bin/bash


#       ssh pi@Lampi -t 'sudo /home/pi/server/solidPulse.py'
#        ssh pi@Lampi 'sudo python /home/pi/server/lampSwitch.py &'
		sshpass -p WW@ves ssh pi@Lampi 'sudo python /home/pi/server/lampSwitch.py &> /dev/null'&
		echo
		echo
#		echo \n
