###first

* `npm install`

###source

* hesrc/main.js

###later

+ build for prod with:
    - `jspm bundle src/main --inject`
    
+ system.js + config.js + self-executing-module();
    - `jspm bundle-sfx lib/main`
    
    minified:
    - `jspm bundle-sfx src/main main.js --minify`
