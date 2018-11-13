const fs = require('fs');
const faker = require('faker');
const request = require('request');

// const users = JSON.parse(fs.readFileSync('./dump.json'));

// const download = function (uri, filename, callback) {
//     request.head(uri, function (err, res, body) {
//         console.log('content-type:', res.headers['content-type']);
//         console.log('content-length:', res.headers['content-length']);
//         request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
//     });
// };

// users.forEach(user => {
//     const userId = user._id['$oid'];
//     const uri = user.avatar;
//     let filename = uri.split('/');
//     filename = filename[filename.length - 2] + '.jpg';
//     const imageUrl = 'http://storage.googleapis.com/avanade-academy/users/' + filename;
//     console.log(`db.users.update({id: ObjectId('${userId}')}, {$set: {avatar: '${imageUrl}'}})`);
// });

// const users = JSON.parse(fs.readFileSync('./users.json'));

// users.forEach(user => {
//     request.post('http://localhost:3000/api/users/register', {
//         form: user
//     }, (error, response, body) => {
//         const newUser = JSON.parse(body).user;
//         console.log({
//             id: newUser.id,
//             name: newUser.fullName
//         });
//     })
// });

// const rawUsers = JSON.parse(fs.readFileSync('./dump.json'));
// const users = rawUsers.map(user => ({ id: user._id['$oid'], name: `${user.firstName} ${user.lastName}`}));
// const images = JSON.parse(fs.readFileSync('./images.json'));

// const random = function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const list = function (array, number) {
//     let list = [];
//     while (list.length <= number) {
//         let item = users[random(0, array.length - 1)];
//         if (!list.includes(item)) {
//             list.push(item);
//         }
//     }
//     return list;
// }

// let array = [];
// for (let i = 0; i < 5000; i++) {
//     array.push({
//         user: users[random(0,20)],
//         text: faker.lorem.text(),
//         imagePath: `http://storage.googleapis.com/avanade-social/publications/${images[random(0, 31)]}`,
//         likes: list(users, random(0, 40))
//     });
// }

// fs.writeFileSync('./publications.json', JSON.stringify(array));

// const users = JSON.parse(fs.readFileSync('./dump.json'));
// const publications = JSON.parse(fs.readFileSync('./publications.json'));

// const newPublications = publications.map((publication) => {
//     const userId = publication.user.id;
//     const currentUser = users.find((user) => userId == user._id['$oid']);
//     publication.user.avatar = currentUser.avatar;
//     publication.createdAt = faker.date.past();
//     console.log(publication.createdAt);
//     return publication;
// });

// fs.writeFileSync('./new-publications.json', JSON.stringify(newPublications));


// users.forEach(user => {
//     console.log(user);
//     // request.post('http://localhost:3000/api/publications', {
//     //     form: pub
//     // }, (error, response, body) => {
//     //     console.log(body);
//     // })
// });
const publications = JSON.parse(fs.readFileSync('./new-publications.json'));

publications.forEach(pub => {
    request.post('http://localhost:3000/api/publications', {
        form: pub
    }, (error, response, body) => {
        console.log(body);
    })
});