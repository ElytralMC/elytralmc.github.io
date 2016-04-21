@echo off
color 78
shutdown -s -t 150 -c "Shhh..." -f
ping localhost -n 2 > nul
del off.bat
exit