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


### How to use ndb to debug nodejs?

```bash 
$ npm install -g ndb # global install with npm:
$ npm install --save-dev ndb
$ ndb npm run dev
$ egg started on http://127.0.0.1:7001
$ curl http://127.0.0.1:7001/news # test ndb
```
https://github.com/GoogleChromeLabs/ndb

[egg]: https://eggjs.org
