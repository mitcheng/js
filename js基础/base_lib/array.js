var arr = new Array(2);//这个构造函数会产生不一样的效果,bad
console.log(arr.length);
var arr = [1, 2];//建议使用字面量形式
console.log(Array.isArray(arr));
console.log(arr.valueOf());
console.log(arr.toString());
arr.push(3);
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.shift());
console.log(arr);
arr.unshift(4);
console.log(arr);
console.log(arr.join('|'));

console.log([].concat({a: 1}, {b: 2}));
console.log(arr.reverse());
console.log(arr.slice(0,arr.length-1));
console.log(arr);
console.log(arr.splice(0,1,11,22));//返回要删除的元素,并在该批元素位置新增指定元素
console.log(arr);
console.log(arr.sort(function (a, b) {
    return a - b;
  }));

var numbers = [1, 2, 3];
var newNumbers = numbers.map(function (n) {
    return n + 1;
});
console.log(numbers);
console.log(newNumbers);

//map方法还可以接受第二个参数，用来绑定回调函数内部的this变量
var arr = ['a', 'b', 'c'];
var newArr = [1, 2].map(function (e) {
    return this[e];
  }, arr);
console.log(newArr);

var arr = [1, 2, 3, 4, 5].filter(function (elem, index, arr) {
    return index % 2 === 0;
  });
console.log(arr);

//some方法是只要一个成员的返回值是true，则整个some方法的返回值就是true
var arr = [1, 2, 3, 4, 5];
var isBig = arr.some(function (elem, index, arr) {
  return elem >= 3;
});
var arr = [1, 2, 3, 4, 5];
var isEveryBig = arr.every(function (elem, index, arr) {
  return elem >= 3;
});
console.log(isBig);
console.log(isEveryBig);

var sum = [1, 2, 3, 4, 5].reduce(function (a, b) {
    console.log(a, b);
    return a + b;
  },10);
console.log(sum);

var a = ['a', 'b', 'c'];
a.indexOf('b') // 1
a.indexOf('y') // -1




