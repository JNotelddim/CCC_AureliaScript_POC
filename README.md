Aurelia Script - CCC - Proof of Concept

this repository is just a mini-app, not intended to have any real functionality.
it is being used to load in a barebones aurelia application onto waterworth.net (our website),
and just load a basic npm-packaged component which comes from our main application code.
it will then also send a request to an anonymized API endpoint to ensure the setup of the apis works,
then it will be expected to have a cookie which preserves the anonymous user's session data.

to re-bundle the application:
*ensure browserify is installed, (npm i -g browserify)
*navigate to source dir,
*bundle: browserify main.js > ccc-bundle.js

after that, just make sure you replace the bundle in the wwwroot/scripts dir of Waterworth/src/WebUIFinal
