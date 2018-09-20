'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async hello() {
    this.ctx.body = 'Hello!';
  }

  async info() {

    this.ctx.body = `yoyo 2323 user: ${this.ctx.params.id}, ${this.ctx.params.name}`;
  }
}

module.exports = TestController;

