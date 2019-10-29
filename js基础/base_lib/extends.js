//原型链继承
function Cat (name, color) {
    this.name = name;
    this.color = color;
    this.meow = function () {
        console.log('喵喵');
    };
}
var cat1 = new Cat('大毛', '白色');
console.log(cat1);
//问题1:同一个构造函数的多个实例之间，无法共享属性，从而造成对系统资源的浪费
var cat2 = new Cat('二毛', '黑色');
console.log(cat1.meow === cat2.meow);//false
//解决方案:如果属性和方法定义在原型上，那么所有实例对象就能共享，不仅节省了内存，还体现了实例对象之间的联系
//注意点:1.原型对象的属性不是实例对象自身的属性。只要修改原型对象，变动就立刻会体现在所有实例对象上
//      2.如果实例对象自身就有某个属性或方法，它就不会再去原型对象寻找这个属性或方法
console.log(typeof Cat.prototype);
Cat.prototype.age = 29;
var cat3 = new Cat('大毛', '白色');
var cat4 = new Cat('二毛', '黑色');
console.log(cat3.age);
console.log(cat4.age);
Cat.prototype.age = 30;
console.log(cat3.age);
console.log(cat4.age);
cat3.age = 31;
console.log(cat3.age);

// Object.prototype对象的原型是null
console.log(Object.getPrototypeOf(Object.prototype));
var MyArray = function () {};
MyArray.prototype = new Array();
MyArray.prototype.constructor = MyArray;
var mine = new MyArray();
mine.push(1, 2, 3);
console.log(mine.length);
console.log(mine instanceof Array);
//prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数
function P() {}
console.log(P.prototype.constructor === P);
var p = new P();
//p是构造函数P的实例对象，但是p自身没有constructor属性，该属性其实是读取原型链上面的P.prototype.constructor属性
console.log(p.constructor === P);//从这里可以得知某个实例对象由哪个构造方法产生
console.log(p.constructor === P.prototype.constructor);
console.log(p.hasOwnProperty('constructor'));
var q = new p.constructor();//从一个实例对象新建另一个实例,其实调用的是P.prototype.constructor()
console.log(q instanceof P);

//修改了Person.prototype,而Person.prototype继承至Object,因此Person.prototype.constructor来之Object
function Person(name) {
    this.name = name;
}
console.log(Person.prototype.constructor === Person); // true
Person.prototype = {
    // constructor: Person,一定要加上这一句
    method: function () {}
};
console.log(Person.prototype.constructor === Person); // false
console.log(Person.prototype.constructor === Object); // true

//instanceof运算符的左边是实例对象，右边是构造函数
//它会检查右边构建函数的原型对象（prototype），是否在左边对象的原型链上,instanceof检查整个原型链
console.log(q instanceof P);
console.log(P.prototype.isPrototypeOf(q));

//继承的完整过程
function Shape() {
    this.x = 0;
    this.y = 0;
}
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};
// 第一步，子类继承父类的实例
function Rectangle() {
    Shape.call(this); // 调用父类构造函数
}
// 第二步，子类继承父类的原型
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
var rect = new Rectangle();
console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);
console.log(Rectangle.prototype);

//单个继承Shape的move方法
Rectangle.prototype.move = function() {
    Shape.prototype.move.call(this);  
}


























































