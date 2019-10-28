(function(){ console.log("qqq");}());
(function(){ 
    console.log("qqq");
})();

function print(s) {
    console.log(s);
}
print("abc");

var print = function(s){
    console.log(s);
}
print("bcd");

var fx = function fx() {
    console.log("test fx()");
};
fx();

var add = new Function(
    'x',
    'y',
    'return x + y'
  );
  // 等同于
function add(x, y) {
    return x + y;
}

function f() {
    console.log(1);
  }
  f(); // 2
  
  function f() {
    console.log(2);
  }
  f(); // 2


  function add(x, y) {
    return x + y;
  }
  
  // 将函数赋值给一个变量
  var operator = add;
  
  // 将函数作为参数和返回值
  function a(op){
    return op;
  }
  console.log(a(add)(3, 1));
  console.log(a(operator)(1, 2));
  
console.log(Math.sqrt.toString());

var multiline = function (fn) {
    var arr = fn.toString().split('\n');
    return arr.slice(1, arr.length - 1).join('\n');
};
function f() {/*
    这是一个
    多行注释
*/}
console.log(multiline(f));
// " 这是一个
//   多行注释"

// **函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域

function f(a, a) {
    console.log(arguments);
    console.log(arguments.callee);
    console.log(arguments.length);
}
  
f(1,2,3);

//闭包:闭包就是函数f2，即能够读取其他函数内部变量的函数
function f1() {
    var n = 999;
    function f2() {
      console.log(n);
    }
    return f2;
  }
  f1()();






