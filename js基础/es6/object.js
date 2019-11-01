// 对象的扩展
// 属性名就是变量名, 属性值就是变量值
function f(x, y) {
    return {x, y};
}
console.log(f(1, 2));//Object {x: 1, y: 2}

// method方法省略function关键字
const o = {
    method() {
        return "Hello!";
    }
};

// module.exports = { getItem, setItem, clear };

// 属性的可枚举性和遍历
// 可枚举性
// let obj = { foo: 123 };
// console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }
/**
 * for...in循环：只遍历对象自身的和继承的可枚举的属性。
 * Object.keys()：返回对象自身的所有可枚举的属性的键名。
 * JSON.stringify()：只串行化对象自身的可枚举的属性。
 * Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性
 */
// 5 种方法可以遍历对象的属性
/**
 * for...in
 * Object.keys(obj)
 * Object.getOwnPropertyNames(obj)
 * Object.getOwnPropertySymbols(obj)
 * Reflect.ownKeys(obj)
 */


 /**
  * super 关键字
  * super，指向当前对象的原型对象,只能应在对象上
  */

/**
 * Object.is()
 * Object.assign()
 * Object.getOwnPropertyDescriptors()
 * __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
 * Object.keys()，Object.values()，Object.entries()
 * Object.fromEntries()
 */
// Object.is()
console.log(Object.is('foo', 'foo'));// true
console.log(Object.is({}, {}));// false
// ES5
console.log(+0 === -0 );//true
console.log(NaN === NaN );// false
// ES6
console.log(Object.is(+0, -0)); // false
console.log(Object.is(NaN, NaN) );// true
// ES5重写
Object.defineProperty(Object, 'is', {
    value: function(x, y) {
      if (x === y) {
        // 针对+0 不等于 -0的情况
        return x !== 0 || 1 / x === 1 / y;
      }
      // 针对NaN的情况
      return x !== x && y !== y;
    },
    configurable: true,
    enumerable: false,
    writable: true
});

// Object.assign():对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target)
// Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false)
// 实行的是浅拷贝
// const target = { a: 1 };
// const source1 = { b: 2 };
// const source2 = { c: 3 };
// Object.assign(target, source1, source2);
// console.log(target); // {a:1, b:2, c:3}
// console.log(Object.assign([1, 2, 3], [4, 5]));//把数组视为对象
// const source = {
//     get foo() { return 1 }
// };
// const target = {};
// console.log(Object.assign(target, source));//求值后再复制
// 用处
    // 为对象添加属性
    // 为对象添加方法
    // 克隆对象
    // 合并多个对象
    // 为属性指定默认值

// Object.getOwnPropertyDescriptors()
// ES5 的Object.getOwnPropertyDescriptor()方法会返回某个对象属性的描述对象（descriptor)
// 为了解决Object.assign()无法正确拷贝get属性和set属性的问题
const obj = {
    foo: 123,
    get bar() { return 'abc' }
};
console.log(Object.getOwnPropertyDescriptors(obj));
  // { foo:
  //    { value: 123,
  //      writable: true,
  //      enumerable: true,
  //      configurable: true },
  //   bar:
  //    { get: [Function: get bar],
  //      set: undefined,
  //      enumerable: true,
  //      configurable: true } }
// 该方法的实现
// function getOwnPropertyDescriptors(obj) {
//     const result = {};
//     for (let key of Reflect.ownKeys(obj)) {
//       result[key] = Object.getOwnPropertyDescriptor(obj, key);
//     }
//     return result;
// }

const source = {
    set foo(value) {
      console.log(value);
    }
};

const target1 = {};
Object.assign(target1, source);//Object.assign方法总是拷贝一个属性的值，而不会拷贝它背后的赋值方法或取值方法。
console.log(target1);
console.log(Object.getOwnPropertyDescriptor(target1, 'foo'));
const target2 = {};
Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
console.log(Object.getOwnPropertyDescriptor(target2, 'foo'));

// __proto__属性:用来读取或设置当前对象的prototype对象
// Object.setPrototypeOf():用来设置一个对象的prototype对象，返回参数对象本身
// Object.getPrototypeOf():用于读取一个对象的原型对象






































