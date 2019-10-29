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
  a.b.m();//当前环境是b,因此只能读取b内的属性,不能读取b外的属性
  a.m = a.b.m;//a内部有个m函数,上下文是a内部,可以取到p
  a.m();
  var p = 'window.p';
  var d = a.b.m;
  d();//这个时候d所在环境是window,取到的是window.p

  var A = {
    name: '张三',
    describe: function () {
      return '姓名：'+ this.name;
    }
  };
  
  var name = '李四';
  var f = A.describe;
  console.log(f());//浏览器上面有哥window环境,其实是window.f(),window.name=李四

/**
 * Function.prototype.call():可以指定函数内部this的指向（即函数执行时所在的作用域）
 */
console.log('-------------call------------');
var obj = {};
var f = function () {
  return this;
};
// f() === window // true
// f.call(obj) === obj // true

// var n = 123;
// var obj = { n: 456 };

// function a() {
//   console.log(this.n);
// }
// a.call() // 123
// a.call(null) // 123
// a.call(undefined) // 123
// a.call(window) // 123
// a.call(obj) // 456

var obj = {};
console.log(obj.hasOwnProperty('toString')); // false

// 覆盖掉继承的 hasOwnProperty 方法
obj.hasOwnProperty = function () {
  return true;
};
console.log(obj.hasOwnProperty('toString')); // true
//将继承的方法附给实例对象,这样无论怎么覆盖实例对象的方法都无济于事
Object.prototype.hasOwnProperty.call(obj, 'toString') // false
// console.log(obj.hasOwnProperty('toString'));
// // 覆盖掉继承的 hasOwnProperty 方法
// obj.hasOwnProperty = function () {
//     return true;
//   };
// console.log(obj.hasOwnProperty('toString'));

/**
 * Function.prototype.apply()
 */
console.log('------apply----------');
var a = [10, 2, 4, 15, 9];
console.log(Math.max.apply(null, a)); // 15
console.log(Array.apply(null, ['a', ,'b']));
console.log(Array.prototype.slice.apply({0: 1, length: 1}));
console.log(Array.prototype.slice.apply({0: 1}));//必须要有length属性


/**
 * Function.prototype.bind()
 * bind方法用于将函数体内的this绑定到某个对象，然后返回一个新函数
 * 1.每一次返回一个新函数
 * 2.结合回调函数使用的时候,需要固定this指向,不能改变原函数this的指向,如foreach里面的函数就指向window了
 */
console.log('------bind-----------');
var d = new Date();
console.log(d.getTime());
var printDate = d.getTime;
// printDate();//报错,该处this不是Date对象
var printDate = d.getTime.bind(d);
printDate();

var counter = {
    count: 0,
    inc: function () {
      this.count++;
    }
  };
var func = counter.inc.bind(counter);
console.log(counter.count);
func();
console.log(counter.count);

var obj = {
    count: 100
  };
var func = counter.inc.bind(obj);
func();
console.log(obj.count);

var add = function (x, y) {
    return x * this.m + y * this.n;
  }
var obj = {
    m: 2,
    n: 2
};
var newAdd = add.bind(obj, 5);//该处bind绑定了add方法的this与x两个,y未绑定
console.log(newAdd(6));//此处this指向obj,x指向5,y指向6,22

















