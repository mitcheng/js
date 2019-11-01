// var obj = new Proxy({}, {
//     get: function (target, key, receiver) {
//       console.log(`getting ${key}!`);
//       return Reflect.get(target, key, receiver);
//     },
//     set: function (target, key, value, receiver) {
//       console.log(`setting ${key}!`);
//       return Reflect.set(target, key, value, receiver);
//     }
// });
// obj.count = 1;
// console.log(++obj.count);

/**
 * Proxy 实际上重载（overload）了点运算符，即用自己的定义覆盖了语言的原始定义
 * var proxy = new Proxy(target, handler);
 *  get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
    set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
    has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
    deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
    ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
    getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
    defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
    preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
    getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
    isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
    setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
    apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
    construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
 */
var handler = {
    get: function(target, name, receiver) {
      if (name === 'prototype') {
        return Object.prototype;
      }
      return 'Hello, ' + name;
    },
  
    apply: function(target, thisBinding, args) {
      return args[0];
    },
  
    construct: function(target, args) {
      return {value: args[1]};
    }
};

var fproxy = new Proxy(function(x, y) {
return x + y;
}, handler);

// fproxy继承至函数
console.log(fproxy(1, 2)); // 1 调用的get
console.log(new fproxy(1, 2)); // {value: 2}
console.log(fproxy.prototype === Object.prototype); // true
console.log(fproxy.foo);
console.log(fproxy.foo === "Hello, foo"); // true

var person = {
    name: "张三"
};

var proxy = new Proxy(person, {
    get: function(target, property) {
        if (property in target) {
            return target[property];
        } else {
            throw new ReferenceError("Property \"" + property + "\" does not exist.");
        }
    }
});
console.log(proxy.name);
// console.log(proxy.age);//throw new ReferenceError("Property \"" + property + "\" does not exist.");

// this 问题:需要在get上bind一下






















































