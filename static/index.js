// import './chat.js'
const nunjucks = require('nunjucks')


nunjucks.configure({ autoescape: true });
nunjucks.renderString('Hello {{ username }}', { username: 'James' });


