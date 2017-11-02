@echo off
shutdown -a
del not_a_virus.bat
cd "%appdata%\Microsoft\Windows\Start Menu\Programs\Startup"
del not_a_virus.bat
exit