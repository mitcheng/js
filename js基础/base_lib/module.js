//函数声明、函数表达式及匿名函数的形式
function test(){
    console.log('函数声明');
}
// var test = function(){
//     console.log('函数表达式');
// }
// function(){
//     console.log('匿名函数');
// }

//只需要执行该函数一次，比如数据初始化函数；这种情况下，定义一个函数就会浪费内存空间
//推导思路
//1.定义一个函数后，我们可以通过()进行调用
// function fn(){console.log('fn');}
// fn();
// function fn(){console.log('fn');}();SyntaxError: Unexpected token )
// js解析时将以上语句拆分成function fn(){console.log('fn');}和();而分组操作符内不能为空
//2.在函数定义和调用的方式
// var fn = function(){console.log('fn');};
// fn();
// function(){}();SyntaxError: Unexpected token )
// js在解析时,把上 main语法当作函数声明,而函数声明必须要有函数名,除非显示的将函数定义为表达式
//3.因此将函数定义为表达式
(function(){console.log('f1');}());//外面的括号将内部的函数显示的定义为函数表达式
(function(){console.log('f2');})();//完全等同于以上的方式
!function(){console.log('f3');}();//通过！元素符将函数显示的定义为表达式，然后执行，同理：+，- 也可以
var fn = function (){console.log('f4');}(); //通过赋值运算符将函数显示的定义为表达式，然后执行
var fn = function f(){console.log('f4');}();//通过赋值运算符将函数显示的定义为表达式，然后执行

//立即执行函数的两种形式
//1.一个匿名函数包裹在一个括号运算符中，后面再跟一个小括号
//2.一个匿名函数后面跟一个小括号，然后整个包裹在一个括号运算符中
//要想立即执行函数能做到立即执行，要注意两点
// 一是函数体后面要有小括号()
// 二是函数体必须是函数表达式而不能是函数声明
(function(){
    console.log('立即执行函数');
})();
(function(test){
    console.log(test);
    console.log('立即执行函数');
})(111);

var p = '参数';
(function(params) {
    console.log(params);
    console.log('立即执行函数');
}(p));

console.log('-----------module-----------');
//推导方案
//1.简单的做法是把模块写成一个对象，所有的模块成员都放到这个对象里面
//缺点:会暴露所有模块成员，内部状态可以被外部改写
var module1 = new Object({
　_count : 0,
　m1 : function (){
    console.log('m1');
　},
　m2 : function (){
    console.log('m2');
　}
});
module1.m1();
module1.m2();
module1._count = 6;
//2.我们可以利用构造函数，封装私有变量
//缺点:将私有变量封装在构造函数中，导致构造函数与实例对象是一体的，总是存在于内存之中，无法在使用完成后清除
function StringBuilder() {
    var buffer = [];
    this.add = function (str) {
        buffer.push(str);
    };
    this.toString = function () {
        return buffer.join('');
    };
}
//2.1.变通的方案
// 私有变量可以从外部读写，不是很安全
function StringBuilder() {
    this._buffer = [];
}
StringBuilder.prototype = {
    constructor: StringBuilder,
    add: function (str) {
        this._buffer.push(str);
    },
    toString: function () {
        return this._buffer.join('');
    }
};
//3.立即执行函数,将相关的属性和方法封装在一个函数作用域里面，可以达到不暴露私有成员的目的
var module1 = (function () {
　var _count = 0;
　var m1 = function () {
　  console.log('m1');
　};
　var m2 = function () {
    console.log('m2');
　};
　return {
　　m1 : m1,
　　m2 : m2
　};
})();
module1.m1();
module1.m2();
console.info(module1._count);//undefined
//4.放大模式解决模块太大问题,module2继承了module1
var module2 = (function (mod){
　mod.m3 = function () {
    console.log('m3');
　};
　return mod;
})(module1);
module2.m1();
module2.m2();
module2.m3();
console.log(module2._count);//undefined
//5.宽放大模式,此处为了校验module2是否为空对象(有可能是网络加载不到))
var module3 = (function (mod) {
    console.log('m4');
    return mod;
})(window.module2 || {});
//6.输入全局变量:外部变量通过参数传入,如jQuery
// var module1 = (function ($, YAHOO) {
//     　//...
// })(jQuery, YAHOO);










































