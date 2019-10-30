// var promise = new Promise(function (resolve, reject) {
//     if (true){/* 异步操作成功 */
//       resolve(value);
//     } else { /* 异步操作失败 */
//       reject(new Error());
//     }
// });

// function f1(resolve, reject) {
//     console.log('f1');
// }
// var p1 = new Promise(f1);
var p1 = new Promise(function (resolve, reject) {
    resolve('成功');
});
p1.then(console.log, console.error);
var p2 = new Promise(function (resolve, reject) {
    reject(new Error('失败'));
});
p2.then(console.log, console.error);




