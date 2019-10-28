var Vehicle = function () {
    this.price = 1000;
};

var v = new Vehicle();
console.log(v.price); // 1000
/**
 * 如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象
 * 如果return语句返回的是一个跟this无关的新对象，new命令会返回这个新对象，而不是this对象
 */
var Vehicle = function () {
    this.price = 1000;
    return 1000;
};
console.log((new Vehicle()) === 1000);//false
var Vehicle = function (){
    this.price = 1000;
    return { price: 2000 };
};
console.log((new Vehicle()).price);//2000
/** return语句返回的是字符串，所以new命令就忽略了该语句 */
function getMessage() {
    return 'this is a message';
}
var msg = new getMessage();//忽略返回
console.log(msg);

function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
    // 将 arguments 对象转为数组
    var args = [].slice.call(arguments);
    // 取出构造函数
    var constructor = args.shift();
    // 创建一个空对象，继承构造函数的 prototype 属性
    var context = Object.create(constructor.prototype);
    // 执行构造函数
    var result = constructor.apply(context, args);    
    // 如果返回结果是对象，就直接返回，否则返回 context 对象
    return (typeof result === 'object' && result != null) ? result : context;
  }
// 实例
var Person = function () {};
var actor = _new(Person, '张三', 28);
console.log(actor);
//函数内部可以使用new.target属性
function f() {
    console.log(new.target === f);
}
f();
new f();

//以现有的对象作为模板，生成新的实例对象
var person1 = {
    name: '张三',
    age: 38,
    greeting: function() {
      console.log('Hi! I\'m ' + this.name + '.');
    }
  };
  var person2 = Object.create(person1);
  console.log(person2.name);
  
  console.log('----------this---------');
  var A = {
    name: '张三',
    describe: function () {
      return '姓名：'+ this.name;
    }
  };
  
  var B = {
    name: '李四'
  };
  
  B.describe = A.describe;
  console.log(B.describe());

  var a = {
    p: 'Hello',
    b: {
      c:'c',
      m: function() {
        console.log(this.p);
        console.log(this.c);
      }
    }
  };
  a.b.m();

























