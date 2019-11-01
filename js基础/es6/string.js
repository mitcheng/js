// 遍历器接口
for (let codePoint of 'foo') {
    console.log(codePoint);
}
// 模板字符串
let name = "Bob", time = "today";
let nTime = `Hello ${name}, how are you ${time}?`
console.log(nTime);

function fn() {
    return "Hello World";
}
console.log(`foo ${fn()} bar`);

// String.fromCodePoint()
console.log(String.fromCharCode(0x20BB7));
console.log(String.fromCodePoint(0x20BB7));

// String.raw():反转义
console.log(String.raw`Hi\n${2+3}!`);;

// 实例方法：codePointAt():能够正确处理 4 个字节储存的字符，返回一个字符的码点
// let s = '𠮷a';
// console.log(s.codePointAt(0)); // 134071
// console.log(s.codePointAt(1)); // 57271
// console.log(s.codePointAt(2)); // 97

// 实例方法：normalize():用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化
console.log('\u01D1'.normalize() === '\u004F\u030C'.normalize());

// 实例方法：includes(), startsWith(), endsWith()
// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部
let s = 'Hello world!';
console.log(s.startsWith('Hello')); // true
console.log(s.endsWith('!') );// true
console.log(s.includes('o')); // true

// 实例方法：repeat() :返回一个新字符串，表示将原字符串重复n次
console.log('x'.repeat(3));
console.log('hello'.repeat(2));

// 实例方法：padStart()，padEnd():补全长度
console.log('x'.padStart(5, 'ab'));
console.log('x'.padEnd(5, 'ab'));

// 实例方法：trimStart()，trimEnd():消除字符串空格




















