{
    let a = 10;
    var b = 1;
}
// let声明的变量只在它所在的代码块有效
// for循环的i,var是全局遍历,let只在for循环内有效
// 特例:循环变量的那部分是一个父作用域,循环体内部是一个单独的子作用域
// console.log(a);// ReferenceError: a is not defined.
console.log(b);// 1

// var变量foo声明提升,var foo;console.log(foo);foo = 2;
// let 不存在变量提升
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
// console.log(bar); // 报错ReferenceError
// let bar = 2;

// 暂时性死区:使用let命令声明变量之前，该变量都是不可用的,let之前是TDZ
typeof undeclared_variable // "undefined"
// typeof x; // ReferenceError//存在TDZ,导致报错
// let x;
// function bar(x = y, y = 2) {//y存在TDZ,导致x=y报错
//     return [x, y];
// }
// bar();
// 报错
// let x = x;// ReferenceError: x is not defined
// 报错

// 不允许重复声明,不管是var还是let

//为什么需要块级作用域
// 案例1
var tmp = new Date();
function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}
f(); // undefined

// 案例二
var s = 'hello';
for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}
console.log(i); // 5

// 块级作用域,立即执行函数表达式也不需要了
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}
f1();

// ES6中允许在块级作用域之中声明函数
// 浏览器的ES6环境中,块级作用域内声明的函数，行为类似于var声明的变量
// 其他环境的实现不用遵守，还是将块级作用域的函数声明当作let处理
// 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数

// const声明一个只读的常量。一旦声明，常量的值就不能改变。可以认为是不能改变的let
const MAX = 5;
// MAX = 6;//TypeError: Assignment to constant variable.
// const变量的值的内容可以改动,地址不能变
// 需要使用Object.freeze将变量本身以及变量的属性都冻结

// ES6 声明变量的六种方法:var,function,let,const,import,class

// 顶层对象的属性
// 浏览器环境:window
// Node:global对象
// var命令和function命令声明的全局变量，依旧是顶层对象的属性
// let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性
// globalThis 对象



