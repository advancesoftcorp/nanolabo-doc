REM msgcat ../locale/en/LC_MESSAGES/*.po > ../locale/en.po
sphinx-intl build
sphinx-build -M html . ..\locale\ja -D language=ja
sphinx-build -M html . ..\locale\en -D language=en