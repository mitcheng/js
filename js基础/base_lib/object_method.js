//1.Object.getPrototypeOf方法返回参数对象的原型
var F = function () {};
var f = new F();
console.log(Object.getPrototypeOf(f));
console.log(Object.getPrototypeOf(f) === F.prototype);
// 空对象的原型是 Object.prototype
console.log(Object.getPrototypeOf({}));
console.log(Object.prototype);
// Object.prototype 的原型是 null
console.log(Object.getPrototypeOf(Object.prototype));
// 函数的原型是 Function.prototype
function b() {};
console.log(Object.getPrototypeOf(b));
console.log(Object.getPrototypeOf(b) === Function.prototype);

//2.Object.setPrototypeOf方法为参数对象设置原型，返回该参数对象
var a = {};
var b = {x: 1};
Object.setPrototypeOf(a, b);
console.log(Object.getPrototypeOf(a) === b);
console.log(a.x);

//new F()的步骤:
//  1.将一个空对象的原型设为构造函数的prototype属性
//  2.将构造函数内部的this绑定这个空对象，然后执行构造函数，使得定义在this上面的方法和属性（上例是this.foo），都转移到这个空对象上
var F = function () {
    this.foo = 'bar';
};
var f = new F();// 等同于
console.log(Object.getPrototypeOf(f));
console.log(f.foo);
var f = Object.setPrototypeOf({}, F.prototype);
console.log(Object.getPrototypeOf(f));
console.log(f.foo);
F.call(f);//F内的this指向f
console.log(f.foo);

//3.Object.create():从一个实例对象，生成另一个实例对象
// 注意点:改变原原型对象会反映到新对象实例中
// 原型对象
var A = {
    print: function () {
        console.log('hello');
    }
};
// 实例对象
var B = Object.create(A);
console.log(Object.getPrototypeOf(A));
console.log(Object.getPrototypeOf(B));
console.log(Object.getPrototypeOf(B) === A);
B.print();
//以上实际的执行效果
if (typeof Object.create !== 'function') {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
var obj1 = Object.create({});
var obj2 = Object.create(Object.prototype);
var obj3 = new Object();
//以上三个的原型都是Object.prototype {},以下obj的原型是null,不继承Object的方法,不具备定义在Object.prototype对象上面的属性
var obj = Object.create(null);

//b对象的原型是a对象，因此继承了a对象的构造函数A。
function C() {}
var a = new C();
var b = Object.create(a);
console.log(b.constructor === C);// true
console.log(b instanceof C); // true

//4.Object.prototype.isPrototypeOf():判断该对象是否为参数对象的原型
var o1 = {};
var o2 = Object.create(o1);
var o3 = Object.create(o2);
console.log(o1.isPrototypeOf(o2));
console.log(o1.isPrototypeOf(o3));
console.log(o2.isPrototypeOf(o3));

//5.Object.prototype.__proto__
//Object.getPrototypeOf()和Object.setPrototypeOf()操作的内部对象

//6.取实例对象obj的原型对象
// obj.__proto__:只有浏览器才需要部署，其他环境可以不部署
// obj.constructor.prototype:在手动改变原型对象时，可能会失效
// Object.getPrototypeOf(obj)

//7.Object.getOwnPropertyNames():返回一个数组，成员是参数对象本身的所有属性的键名，不包含继承的属性键名
console.log(Object.getOwnPropertyNames(Date));
console.log(Object.keys(Date));

//8.Object.prototype.hasOwnProperty():判断某个属性定义在对象自身，还是定义在原型链上
console.log(Date.hasOwnProperty('length'));
console.log(Date.hasOwnProperty('toString'));

//9.in运算符返回一个布尔值，表示一个对象是否具有某个属性,常用于检查一个属性是否存在,不区分该属性是对象自身的属性，还是继承的属性。
console.log('length' in Date);
console.log('toString' in Date);

//10.for...in获得对象的所有可遍历属性（不管是自身的还是继承的)
var o1 = { p1: 123 };
var o2 = Object.create(o1, {
  p2: { value: "abc", enumerable: true }
});
//打印o2所有的属性,包括继承的
for (p in o2) {
  console.info(p);
}
//打印o2自身的属性
for ( var name in o2 ) {
    if ( o2.hasOwnProperty(name) ) {
        console.info(name);
    }
}

function inheritedPropertyNames(obj) {
    var props = {};
    while(obj) {
        //获取obj本身所有属性
        Object.getOwnPropertyNames(obj).forEach(function(p) {
            props[p] = true;
        });
        //获取obj原型上的对象
        obj = Object.getPrototypeOf(obj);
    }
    return Object.getOwnPropertyNames(props);
}
console.log(inheritedPropertyNames(Date));

//11.对象的拷贝
function copyObject(orig) {
    var copy = Object.create(Object.getPrototypeOf(orig));
    copyOwnPropertiesFrom(copy, orig);
    return copy;
}
function copyOwnPropertiesFrom(target, source) {
    Object.getOwnPropertyNames(source)
        .forEach(function (propKey) {
            var desc = Object.getOwnPropertyDescriptor(source, propKey);
            Object.defineProperty(target, propKey, desc);
        });
    return target;
}
function copyObject(orig) {
    return Object.create(
      Object.getPrototypeOf(orig),
      Object.getOwnPropertyDescriptors(orig)
    );
}




























































