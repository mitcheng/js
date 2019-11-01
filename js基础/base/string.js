console.log((function () { /*
    line 1
    line 2
    line 3
    */}).toString().split('\n').slice(1, -1).join('\n'));

    /**
     * 转义字符
     *  \0 ：null（\u0000）
        \b ：后退键（\u0008）
        \f ：换页符（\u000C）
        \n ：换行符（\u000A）
        \r ：回车键（\u000D）
        \t ：制表符（\u0009）
        \v ：垂直制表符（\u000B）
        \' ：单引号（\u0027）
        \" ：双引号（\u0022）
        \\ ：反斜杠（\u005C）
     */

     /**
      * 反斜杠后面紧跟三个八进制数
      * \x后面紧跟两个十六进制数
      * \u后面紧跟四个十六进制数
      * 在非特殊字符前面使用反斜杠，则反斜杠会被省略。
      */
     console.log('\251');
     console.log('\xA9');
     console.log('\u00A9');
     console.log('\a');
     console.log('\\\a');

     /**
      * 字符串可以被视为字符数组
      * 无法改变字符串中的字符
      */
     console.log('hello'[1]);
     console.log('hello'[10]);
     var s = 'hello';
     s[1] = 'a';
     console.log(s);
     console.log(s.length);

     /**
      * 字面形式,Unicode形式
      */
     var f\u006F\u006F = 'abc';
     console.log(f\u006F\u006F);
     console.log(foo);

     /**
      * 对于码点在U+10000到U+10FFFF之间的字符，JavaScript 总是认为它们是两个字符（length属性为2）
      * 码点U+1D306对应的字符为𝌆，它写成 UTF-16 就是0xD834 0xDF06
      */
     console.log('𝌆'.length);//特殊
     
     /**
      * Base64 转码
      * 目的:不是为了加密，而是为了不出现特殊字符，简化程序的处理
      * btoa,atob是window对象的方法
      * btoa:用于将binary的数据用ascii码表示
      * atob:ascii码解析成binary数据
      * atob和btoa不能编码Unicode字符,所以先使用encodeURIComponent,decodeURIComponent编解码在base64编解码
      */
     console.log(encodeURIComponent('你好'));
   //   console.log(btoa('Hello World')); // "SGVsbG8gV29ybGQh"
   //   console.log(atob('SGVsbG8gV29ybGQh')) // "Hello World!"

{
   var a = 1;
}
console.log(a);

if (true) {
   var b = 2;
}
console.log(b);
console.log(typeof NaN);

eval('var a = 1;');
console.log(a);

function args() { return arguments }
var arrayLike = args('a', 'b');
var arr = Array.prototype.slice.call(arrayLike);
arr.push(1);
console.log(arr);
var array = [1,2,3];
var aa = array.slice(0,1);
console.log(aa);

var fn = function () {console.log('fn');};
var obj = Object(fn); // 返回原函数
obj();
var obj = new Object();
console.log(1+obj);

console.log(Object.prototype.toString.call('abc'));

function add(a, b) {
   return a + b;
 }
 add.call(this, 1, 2) // 3

 var counter = {
   count: 0,
   inc: function () {
     this.count++;
   }
 };
 counter.inc.call(counter);
 console.log(counter.count);

 var func = counter.inc.bind(counter);
 func();
 console.log(counter.count);

var sli = [1, 2, 3];
console.log(sli.slice(0,1));
console.log(Array.prototype.slice.call(sli,0,1));
// 以上方法相当于sli对象调用Array.prototype.slice方法,改写成
// Array.prototype.slice方法绑定到sli对象
var s = Array.prototype.slice.bind(sli);
console.log(s(0,1));

console.log(Function.prototype.call.call(Array.prototype.slice,[1, 2, 3], 0, 1));;
// 相当于Array.prototype.slice对象调用Function.prototype.call这个方法,改写成
// Function.prototype.call方法绑定到Array.prototype.slice对象
var bbbb = Function.prototype.call.bind(Array.prototype.slice);
console.log(bbbb([1, 2, 3], 0, 1));//[1, 2, 3].slice(0,1)

function f() {
   console.log(this.v);
}
var o = { v: 123 };
// Function.prototype.call方法绑定到Function.prototype.bind对象
Function.prototype.call.call(Function.prototype.bind,f,o)();
var aaa = Function.prototype.call.bind(Function.prototype.bind);
aaa(f, o)();//f.bind(o)

