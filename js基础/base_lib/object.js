Object.print1 = function (o) { console.log(o) };
Object.prototype.print2 = function (a) {
    console.log(a);
  };
//静态方法
Object.print1('abc');
//实例方法
var a = new Object();
a.print2('123');

var obj = Object(1);
obj instanceof Object // true
obj instanceof Number // true

var obj = Object('foo');
obj instanceof Object // true
obj instanceof String // true

var obj = Object(true);
obj instanceof Object // true
obj instanceof Boolean // true

//判断变量是否为对象的函数
function isObject(value) {
    return value === Object(value);
}
isObject([]) // true
isObject(true) // false

//Object的静态方法
/**
 * Object.keys方法和Object.getOwnPropertyNames方法都用来遍历对象的属性
 */
var obj = {
    p1: 123,
    p2: 456
  };
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));

/**
 * 实例方法
 * Object.prototype.valueOf(),返回一个对象的“值”
 * 数组、字符串、函数、Date 对象调用toString方法，并不会返回[object Object]，因为它们都自定义了toString方法，覆盖原始方法
 */
var obj  = new Object();
console.log(obj.valueOf() === obj);

Object.prototype.toString.call(2); // "[object Number]"
Object.prototype.toString.call(''); // "[object String]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(Math); // "[object Math]"
Object.prototype.toString.call({}); // "[object Object]"
console.log(Object.prototype.toString.call([])); // "[object Array]"

var type = function (o){
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
  };
type({}); // "object"
type([]); // "array"
type(5); // "number"
type(null); // "null"
type(); // "undefined"
type(/abcd/); // "regex"
console.log(type(new Date())); // "date"

console.log(type);
['Null',
 'Undefined',
 'Object',
 'Array',
 'String',
 'Number',
 'Boolean',
 'Function',
 'RegExp'
].forEach(function (t) {
  //为type这个对象添加函数属性
  type['is' + t] = function (o) {
    return type(o) === t.toLowerCase();
  };
  console.log(type['is'+t]('a'));
});

type.isObject({}) // true
type.isNumber(NaN) // true
type.isRegExp(/abc/) // true

var date = new Date();
console.log(date.toString());
console.log(date.toLocaleString());

console.log(type.hasOwnProperty('isNull'));

console.log('------属性描述对象------');
/**
 * 属性描述对象
 * {
    value: 123,
    writable: false,
    enumerable: true,
    configurable: false,
    get: undefined,
    set: undefined
   }
 */
var obj = { p: 'a',b:{c:'c'} };
console.log(Object.getOwnPropertyDescriptor(obj, 'p'));//无法获取继承的属性
console.log(Object.getOwnPropertyNames(obj));//返回所有属性,包括不可遍历的,Object.keys()返回可遍历的
var obj = Object.defineProperty({b:'c'}, 'p', {
    value: 123,
    writable: false,
    enumerable: true,
    configurable: false
  });
console.log(obj);
//一旦定义了取值函数get（或存值函数set），就不能将writable属性设为true，或者同时定义value属性，否则会报错
var obj = {};
// Object.defineProperty(obj, 'p', {
//   value: 123,
//   get: function() { return 456; }
// });
// Object.defineProperty(obj, 'p', {
//     writable: true,
//     get: function() { return 456; }
//   });

//Object.prototype.propertyIsEnumerable() 判断某个属性是否能遍历
var obj = {};
obj.p = 123;
console.log(obj.propertyIsEnumerable('p')); // true
console.log(obj.propertyIsEnumerable('toString')); // false
var obj = {
    get p() {
        return 'getter';
    },
    set p(value) {
        console.log('set p:'+value);
    }
};
obj.p = 2;
console.log(obj.p);
  
/**
 * 对象的copy
 */
console.log('-------对象的copy--------');
var extend = function (to, from) {
    for (var parms in from) {//这里有print2,是因为from继承至Object,Object的实例原先有print2方法
      to[parms] = from[parms];
    }
    return to;
  };
var result = extend({}, {
    a: 1
});
console.log(result);
var res = extend({}, {
    get a() { return 1; }
});
console.log(res);

// 以上只能copy值,不能copy全属性
var extend = function (to, from) {
    for (var property in from) {
      if (!from.hasOwnProperty(property)) continue;
      Object.defineProperty(
        to,
        property,
        Object.getOwnPropertyDescriptor(from, property)
      );
    }
    return to;
  }
  var res = extend({}, {
      a: 1
  });
console.log(res.a);

/**
 * 控制对象状态
 * Object.preventExtensions:使得一个对象无法再添加新的属性
 * Object.isExtensible():检查一个对象是否使用了Object.preventExtensions方法
 * Object.seal:使得一个对象既无法添加新属性，也无法删除旧属性,其实是configurable = false
 * Object.isSealed():检查一个对象是否使用了Object.seal方法
 * Object.freeze:使得一个对象无法添加新属性、无法删除旧属性、也无法改变属性的值，使得这个对象实际上变成了常量
 * Object.isFrozen():检查一个对象是否使用了Object.freeze方法
 * 上面这些方法只能冻结属性指向的对象，而不能冻结对象本身的内容,对象里面的对象属性
 */













