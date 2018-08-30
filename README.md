# commandline
A git bash, command prompt prototype application
clone or download this repo
cd into the folder 
do npm install to install all dependencies
cd into commands.js
do node commands.js add to add customers
/////////////////////////////////////////////////
to access on your git bash or cmd
go to package.json and add
"preferGlobal": true,
"bin": "./commander/commands.js",
then do npm link 
from there you can go to any cmd cli and use the application name
e.g commandline --version
