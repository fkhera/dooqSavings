#!/bin/bash
while true; do
forever stopall
sleep 120
sh appMaster.sh
sleep 21600
done