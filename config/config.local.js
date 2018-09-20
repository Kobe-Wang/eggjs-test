'use strict';

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};
// add middleware robot
exports.middleware = [
  'robot',
];
// robot's configurations
exports.robot = {
  ua: [
    /Baiduspider/i,
  ],
};
