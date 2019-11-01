// ES6 允许为函数的参数设置默认值
function log(x, y = 'World') {
    console.log(x, y);
}
log('Hello'); // Hello World
log('Hello', 'China'); // Hello China

// 与解构赋值默认值结合使用
function foo({x, y = 5}) {
    console.log(x, y);
}
foo({x: 1}); // 1 5
foo({x: 1, y: 2}); // 1 2

// 函数的 length 属性,将返回没有指定默认值的参数个数
console.log((function (a) {}).length);
console.log((function (a = 5) {}).length);
console.log((function (a, b, c = 5) {}).length);
// 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。
console.log((function (a, b = 1, c) {}).length); // 1

// rest 参数:获取函数的多余参数
function add(...values) {
    console.log(values);
}
add(1,2,3);

/**
 * 箭头函数
 */
var f = v => v;
// 等同于
var f = function (v) {
  return v;
};

var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};

/**
 *（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    this对象的指向是可变的，但是在箭头函数中，它是固定的
 *（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
 *（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
 *（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
 */
// 箭头函数根本没有自己的this,导致内部的this就是外层代码块的this
// 也不存在arguments、super、new.target参数
// 也就不能用call()、apply()、bind()这些方法去改变this的指向
function foo1() {
    setTimeout(() => {
      console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo1.call({ id: 42 });

/**
 * 前者的this绑定定义时所在的作用域（即Timer函数），后者的this指向运行时所在的作用域（即全局对象）
 */
// function Timer() {
//     this.s1 = 0;
//     this.s2 = 0;
//     // 箭头函数
//     setInterval(() => this.s1++, 1000);
//     // 普通函数
//     setInterval(function () {
//       this.s2++;
//     }, 1000);
// }
// var timer = new Timer();
// setTimeout(() => console.log('s1: ', timer.s1), 3100);
// setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3
// s2: 0

// 尾调用,尾递归优化只在严格模式下生效
// 尾调用:某个函数的最后一步是调用另一个函数
// 只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行“尾调用优化”
// 尾递归:只存在一个调用帧

// ES2019 对函数实例的Function.prototype.toString()方法做出了修改,会省略注释和空格
// ES2019 允许catch语句省略参数


































