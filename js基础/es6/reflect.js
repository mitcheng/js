// 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上
// 从Reflect对象上可以拿到语言内部的方
// 让Object操作都变成函数行为。某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为
// 老写法
console.log('assign' in Object); // true
// 新写法
console.log(Reflect.has(Object, 'assign')); // true

// Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法
// 老写法
console.log(Function.prototype.apply.call(Math.floor, undefined, [1.75])); // 1
// 新写法
console.log(Reflect.apply(Math.floor, undefined, [1.75])); // 1

/**
 *  Reflect.apply(target, thisArg, args)
    Reflect.construct(target, args)
    Reflect.get(target, name, receiver)
    Reflect.set(target, name, value, receiver)
    Reflect.defineProperty(target, name, desc)
    Reflect.deleteProperty(target, name)
    Reflect.has(target, name)
    Reflect.ownKeys(target)
    Reflect.isExtensible(target)
    Reflect.preventExtensions(target)
    Reflect.getOwnPropertyDescriptor(target, name)
    Reflect.getPrototypeOf(target)
    Reflect.setPrototypeOf(target, prototype)
 */

 /**
  * 使用 Proxy 实现观察者模式
  */
const queuedObservers = new Set();
const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}
const person = observable({
    name: '张三',
    age: 20
});
function print() {
    console.log(`${person.name}, ${person.age}`)
}
observe(print);
person.name = '李四';








