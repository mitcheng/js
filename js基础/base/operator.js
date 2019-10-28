//对象转成原始类型的值:自动调用对象的valueOf方法,对象的valueOf方法总是返回对象自身，这时再自动调用对象的toString方法，将其转为字符串
var obj = { p: 1 };
console.log(obj+2);
console.log(obj.valueOf());
console.log(obj.valueOf().toString());

obj.valueOf = function(){
    return this.p;
}
obj.toString = function(){
    return '10';
}
console.log('-------');
console.log(obj+2);
console.log(obj.valueOf());
console.log(obj.valueOf().toString());
console.log('-------');
var obj = new Date();//特例,优先执行toString
// var obj = { p: 1 };
obj.valueOf = function () { return 1 };
obj.toString = function () { return 'hello' };
console.log(obj+2);
console.log(obj.valueOf());
console.log(obj.valueOf().toString());

var FLAG_A = 1; // 0001
var FLAG_B = 2; // 0010
var FLAG_C = 4; // 0100
var FLAG_D = 8; // 1000

var flags = 5; // 二进制的0101

//检验是否打开了开关C
if (flags & FLAG_C) {
  // 0101 & 0100 => 0100 => true
  console.log(flags);
}
console.log('------');
var flags = 5; // 二进制的0101
//检验是否打开了开关A,B,D
var mask = FLAG_A | FLAG_B | FLAG_D;
// 0001 | 0010 | 1000 => 1011
console.log(flags | mask);//1111,打开指定的开关
console.log(flags & mask);//0001,凡是与开关设置不一样的项，全部关闭
console.log(flags ^ mask);//1110,切换（toggle）当前设置

//void 操作符不返回任何值,可以用来阻止浏览器执行代码的返回
console.log(void(1));
/**
 *  <script>
    function f() {
        console.log('Hello World');
    }
    </script>
    <a href="http://example.com" onclick="f(); return false;">点击</a>
    <a href="javascript: void(f())">文字</a>
    <a href="javascript: void(document.form.submit())">提交</a>
 */

// var err = new Error('出错了');
// console.log(err.message); // "出错了"
// console.log(err.name);
// console.log(err.stack);

// var 1a;

// unknownVariable;

// new Array(-1);

// var obj = {};
// obj.unknownMethod()

// decodeURI('%2')




function UserError(message) {
    this.message = message || '默认信息';
    this.name = 'UserError';
}
  
UserError.prototype = new Error();
UserError.prototype.constructor = UserError;
try {
    throw new UserError();
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    if (error instanceof UserError) {
        console.log("userError");
    }
}finally{
    console.log('finally');
}

var languages = [
    { name: "JavaScript", fileExtension: ".js" },
    { name: "TypeScript", fileExtension: ".ts" },
    { name: "CoffeeScript", fileExtension: ".coffee" }
  ];
  
  console.table(languages);





