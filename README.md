### demo site 

* [http://dviramontes.github.io/d3-stacks-playground](http://dviramontes.github.io/d3-stacks-playground)

####*main points of interest : src/main.js* and test/main.spec.js

###setup

* [install jspm](http://jspm.io/)

* then run `jspm install` and `npm install`

###test

* `karma start karma.config.js`

###production

+ build with system.js + config.js :
    - `jspm bundle src/main build.js --inject`
    
+ build with system.js + config.js + self-executing-module();
    - `jspm bundle-sfx src/main build.js`
    
    - minified `jspm bundle-sfx src/main build.js --minify`
