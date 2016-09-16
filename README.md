# kata-bank-ocr

Some Javascript towards solving the Coding Dojo Kata Bank OCR problem.

## Setup

* Clone the repo
* Install or otherwise make available Node 5.11.0 (others will probably work, I use nodenv to avoid system installs)
* cd into the project
* run `npm install`

## Testing and Development

* `npm test` will run the jasmine specs
* `npm run build` will build to the lib folder
* `npm run repl` will get you into the groovy babel-node REPL, with the ES6 polyfill in scope.

Thanks to the babel test helper, jasmine is automatically transpiling the source code. However, in this simplest format, the source code can only be run through a babel transpiler, so you can't debug using the node cli directly. Since this is a library, I am NOT using babel-register to hook into require nor requiring the polyfill, so TDD is your most convenient way to work or play.

