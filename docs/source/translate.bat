call make.bat gettext
REM copy /Y _build\gettext\*.pot ..\locale\ja\
REM copy /Y ..\locale\ja\* ..\locale\en\LC_MESSAGES\
copy /Y _build\gettext\*.pot ..\locale\en\LC_MESSAGES\
sphinx-intl update -l en