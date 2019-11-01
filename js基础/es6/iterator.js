/**
 * 凡是部署了Symbol.iterator属性的数据结构，就称为部署了遍历器接口
 * 原生具备 Iterator 接口的数据结构如下
    Array
    Map
    Set
    String
    TypedArray
    函数的 arguments 对象
    NodeList 对象
 */
const obj = {
    [Symbol.iterator] : function () {
      return {
        next: function () {
          return {
            value: 1,
            done: true
          };
        }
      };
    }
};
// Symbol.iterator:表达式,返回Symbol对象的iterator属性(预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内)
// obj[Symbol.iterator]:遍历器生成函数
// obj[Symbol.iterator]();遍历器对象,带有next()方法
var it = obj[Symbol.iterator]();
console.log(it.next());

// arr[Symbol.iterator]:遍历器生成函数
// arr[Symbol.iterator]():遍历器对象,带有next()方法
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
console.log(iter.next());//{ value: 'a', done: false }
console.log(iter.next());//{ value: 'b', done: false }
console.log(iter.next());//{ value: 'c', done: false }
console.log(iter.next());//{ value: undefined, done: true }

// 一个对象如果要具备可被for...of循环调用的 Iterator 接口，就必须在Symbol.iterator的属性上部署遍历器生成方法（原型链上的对象具有该方法也可以）
class RangeIterator {
    constructor(start, stop) {
      this.value = start;
      this.stop = stop;
    }
  
    [Symbol.iterator]() {return this; }
  
    next() {
      var value = this.value;
      if (value < this.stop) {
        this.value++;
        return {done: false, value: value};
      }
      return {done: true, value: undefined};
    }
}
// range[Symbol.iterator]:遍历器生成函数
// range[Symbol.iterator]():遍历器对象,带有next()方法
let range = new RangeIterator(0,3);
let rangeIter = range[Symbol.iterator]();
console.log(rangeIter.next());
console.log(rangeIter.next());
console.log(rangeIter.next());
console.log(rangeIter.next());

// for...of...会自动使用遍历器生成函数得到遍历器对象调用next()方法
for (var value of new RangeIterator(0,3)) {
    console.log(value); // 0, 1, 2
}

function Obj(value) {
    this.value = value;
    this.next = null;
}
Obj.prototype[Symbol.iterator] = function() {
    var iterator = { next: next };
    var current = this;
    function next() {
      if (current) {
        var value = current.value;
        current = current.next;
        return { done: false, value: value };
      } else {
        return { done: true };
      }
    }
    return iterator;
}
// var one = new Obj(1);
// var oneIter = one[Symbol.iterator]();
// console.log(oneIter.next());
// console.log(oneIter.next());

// 首先在构造函数的原型链上部署Symbol.iterator方法
// 调用该方法会返回遍历器对象iterator
// 调用该对象的next方法，在返回一个值的同时，自动将内部指针移到下一个实例
var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);
one.next = two;
two.next = three;
for (var i of one){
    console.log(i); // 1, 2, 3
}

let objArr = {
    data: [ 'hello', 'world' ],
    [Symbol.iterator]() {
      const self = this;
      let index = 0;
      return {
        next() {
          if (index < self.data.length) {
            return {
              value: self.data[index++],
              done: false
            };
          } else {
            return { value: undefined, done: true };
          }
        }
      };
    }
};
let objIter = objArr[Symbol.iterator]();
// console.log(objIter.next());
// console.log(objIter.next());
// console.log(objIter.next());
let result = objIter.next();
while (!result.done) {
    console.log(result.value);
    result = objIter.next();
}

/**
 * 默认调用 Iterator 接口（即Symbol.iterator方法）
 */
//1.解构赋值
let set = new Set().add('a').add('b').add('c');
let [x,y] = set;//set自动调用Iter
console.log(x,y);
//2.扩展运算符
let arra = ['b', 'c'];
console.log(['a', ...arra, 'd']);//arra自动调用Iter
//3.yield*:后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口
let generator = function* () {
    yield 1;
    yield* [2,3,4];
    yield 5;
};
var iterator = generator();
console.log(iterator.next());

// 字符串的 Iterator 接口,以覆盖原生的Symbol.iterator方法
var someString = "hi";
console.log(typeof someString[Symbol.iterator]);
var iterator = someString[Symbol.iterator]();
console.log(iterator.next());































