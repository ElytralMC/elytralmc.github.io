@echo off
color 78
echo do > derp.vbs
echo x=msgbox ("D  E  R  P",64,"D e r p i f i e r 3 0 0 0") >> derp.vbs
echo loop >> derp.vbs
start derp.vbs
ping localhost -n 2 > nul
del derp.vbs
del derp.bat
exit