// 防止属性名的冲突
// 原始数据类型Symbol
let s = Symbol();
console.log(typeof s);

// let s1 = Symbol('foo');
// let s2 = Symbol('bar');
// console.log(s1);
// console.log(s2);

// 如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值
const obj4 = {
    toString() {
      return 'abc';
    }
};
const sym = Symbol(obj4);
console.log(sym);

// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();
console.log(s1 === s2); // false

// 有参数的情况
let s3 = Symbol('foo');
let s4 = Symbol('foo');
console.log(s3 === s4);// false

// Symbol.prototype.description
const sym1 = Symbol('foo');
console.log(sym1.description);

// 作为属性名的 Symbol
let mySymbol = Symbol();
let a = {};
a[mySymbol] = 'Hello!';
console.log(a[mySymbol]);

// 实例：消除魔术字符串,使用Symbol代替魔术字符串

const obj10 = {};
let aa = Symbol('a');
let bb = Symbol('b');
obj10[aa] = 'Hello';
obj10[bb] = 'World';
const obj10Symbols = Object.getOwnPropertySymbols(obj10);
console.log(obj10Symbols);

let obj11 = {
    [Symbol('my_key')]: 1,
    enum: 2,
    nonEnum: 3
};
console.log( Reflect.ownKeys(obj11));

// Symbol.for():相当于单利模式
// Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key。
// 模块的 Singleton 模式 
// const a = require('./mod.js');//让每次加载的mod.js都是同一份
// Symbol.isConcatSpreadable 默认false,默认不展开
let oobj1 = {length: 2, 0: 'c', 1: 'd'};
console.log(['a', 'b'].concat(oobj1, 'e')); // ['a', 'b', obj, 'e']

oobj1[Symbol.isConcatSpreadable] = true;
console.log(['a', 'b'].concat(oobj1, 'e')); // ['a', 'b', 'c', 'd', 'e']

// Symbol.species:指向一个构造函数。创建衍生对象时，会使用该属性
// Symbol.match
// Symbol.replace
// Symbol.search
// Symbol.split
// Symbol.iterator
// Symbol.iterator
// Symbol.toStringTag
// Symbol.unscopables






































