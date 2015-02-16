### demo site 

* [http://dviramontes.github.io/d3-stacks-playground](http://dviramontes.github.io/d3-stacks-playground)

###setup

* [install jspm](http://jspm.io/)

* `jspm install`

###development 

* src/main.js

###production

+ with system.js + config.js :
    - `jspm bundle src/main build.js --inject`
    
+ with system.js + config.js + self-executing-module();
    - `jspm bundle-sfx src/main build.js`
    
    minified:
    - `jspm bundle-sfx src/main build.js --minify`
