const db = require('./db');

const posts = [
    ['Welcome to the Club Blog', 'This is the very first post on our brand new CMS.'],
    ['Meeting Times', 'We meet every other Tuesdat after school in room 114.'],
    ['Spring Project Ideas', 'Vote for your favorite project idea at the next meeting.']
];

db.exec('DELETE FROM posts');
const insert = db.prepare('INSERT INTO posts (title, body) VALUES (?, ?)');

for (const [title, body] of posts) {
    insert.run(title, body);
}

console.log('Added ' + posts.length + ' posts');