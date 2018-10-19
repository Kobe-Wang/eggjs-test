# node_test


## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

### npm test

- `npm run test-local`
- Remember to add `config/config.unittest.js` for unit test
- Run one file command `npm run test-local <filename>`
- Run one file command with debug by npm test `npm run test-local -- test/app/middleware/robot.test.js --inspect-brk`


### How to use ndb to debug nodejs?

```bash 
$ npm install -g ndb # global install with npm:
$ npm install --save-dev ndb
$ ndb npm run dev
$ egg started on http://127.0.0.1:7001
$ curl http://127.0.0.1:7001/news # test ndb
```
https://github.com/GoogleChromeLabs/ndb

### How to interactive debug node js unit test?

- Install mocah
- Install inspect
```bash
$ npm install --global mocha
$ npm install --save-dev mocha
$ mocha --inspect-brk <filename>
```
- Open `chrome://inspect` from chrome
- Add `debugger` statement in your unit test file
https://glebbahmutov.com/blog/debugging-mocha-using-inspector/
https://mochajs.org/#usage
https://nodejs.org/en/docs/guides/debugging-getting-started/
- (Option) Install the Chrome Extension NIM (Node Inspector Manager)

### How to run all of unit test files by using mocha?

```bash
$ mocha --recursive # Recursively running all test files
$ mocha --inspect-brk --recursive  # With interactive breakpoints
```

### How to build docker?

```bash
$ docker build -t <name>:<tag> .
```

### How to use image to run as container?

```bash
$ docker run -d -p 8000:8000 <name>:<tag>
```

[egg]: https://eggjs.org
