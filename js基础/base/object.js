var obj = {
    foo: 'Hello',
    bar: 'World'
  };
console.log(obj);

var obj = {
    p: function (x) {
      return 2 * x;
    }
  };
console.log(obj.p(2));

var o1 = {};
var o2 = { bar: 'hello' };

o1.foo = o2;
console.log(o1);
console.log(o1.foo.bar); // "hello"

//上面表示代码块,下面表示对象
console.log(eval('{foo: 123}'));  // 123
console.log(eval('({foo: 123})')); // {foo: 123}

//属性的查看
var obj = {
    foo: 'Hello',
    bar: 'World'
  };
console.log(Object.keys(obj));
delete obj.foo;
console.log(Object.keys(obj));

//属性不可删除
var obj = Object.defineProperty({}, 'p', {
    value: 123,
    configurable: false
  });
console.log(obj.p);
console.log(delete obj.p); // false

//delete命令只能删除对象本身的属性，无法删除继承的属性
var obj = {};
console.log(delete obj.toString);//true
console.log(obj.toString);//toString继承Object,属性还存在

//属性是否存在
var obj = { p: 1 };
console.log('p' in obj);
console.log('toString' in obj);
//in运算符不能识别哪些属性是对象自身的，哪些属性是继承的
if ('toString' in obj) {
  console.log(obj.hasOwnProperty('toString')); // false
  console.log(obj.hasOwnProperty('p')); // true
}

//属性遍历
//遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
//不仅遍历对象自身的属性，还遍历继承的属性,一般情况下，都是只想遍历对象自身的属性,结合使用hasOwnProperty方法

var obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key);
        console.log(obj[key]);
    }
}

//with:操作同一个对象的多个属性时，提供一些书写的方便
var obj = {
    p1: 1,
    p2: 2,
  };
with (obj) {
    p1 = 4;
    p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;
//必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量
//因此不利于编译速度,只能运行时才知道是全局变量还是局部变量
//可用临时变量替代一下
var obj = {};
with (obj) {
  p1 = 4;
  p2 = 5;
}
obj.p1 // undefined
p1 // 4


















