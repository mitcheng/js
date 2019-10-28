var b = new Boolean(true);
console.log(typeof b);
console.log(b.valueOf());
var a = new Boolean(false);
if (a) {
    console.log('a的引用是true,a的值是false');
}
console.log(a.valueOf());

console.log('------------Number--------------');
//静态属性
console.log(Number.POSITIVE_INFINITY);
//Number.prototype.toString(进值)
//Number.prototype.toFixed(几位小数):先将一个数转为指定位数的小数，然后返回这个小数对应的字符串
console.log(10.1.toFixed(4));
//Number.prototype.toExponential():将一个数转为科学计数法形式
//Number.prototype.toPrecision():将一个数转为指定位数的有效数字
//Number.prototype.toLocaleString():接受一个地区码作为参数，返回一个字符串，表示当前数字在该地区的当地书写形式
console.log((123).toLocaleString('zh-Hans-CN', { style: 'currency', currency: 'CNY' }));
console.log((123).toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
console.log('------------String--------------');
console.log(String.fromCharCode(97));//传入的参数不能大于0xFFFF
var s = new String('abc');
console.log(s.charAt(1));
console.log('abc'.charCodeAt(1));
var s1 = 'abc';
var s2 = 'def';
console.log(s1.concat(s2));
console.log('JavaScript'.slice(0, 4));
console.log('JavaScript'.substring(0, 4));
console.log('JavaScript'.substr(4, 6));
console.log('hello world'.indexOf('o'));
console.log('JavaScript'.indexOf('script'));
console.log('  hello world  '.trim());
console.log('\r\nabc \t'.trim());
console.log('Hello World'.toLowerCase());
console.log('Hello World'.toUpperCase());
var matches = 'cat, bat, sat, fat'.match('at');
console.log(matches.index);//匹配的开始
console.log(matches.input);//匹配的原始字符
console.log('cat, bat, sat, fat'.search('at'));
console.log('aaa'.replace('a', 'b'));
console.log('a|b|c'.split('|'));
console.log('apple'.localeCompare('banana'));

console.log('------------Math--------------');
console.log(Math.abs(-1));
console.log(Math.max(2, -1, 5));
console.log(Math.floor(3.2));
console.log(Math.ceil(3.2));
console.log(Math.round(0.4));
console.log(Math.round(0.5));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(4));
console.log(Math.random());//返回0到1之间的一个伪随机数，可能等于0，但是一定小于1
/**
 * 一堆三角函数
 *  Math.sin()：返回参数的正弦（参数为弧度值）
    Math.cos()：返回参数的余弦（参数为弧度值）
    Math.tan()：返回参数的正切（参数为弧度值）
    Math.asin()：返回参数的反正弦（返回值为弧度值）
    Math.acos()：返回参数的反余弦（返回值为弧度值）
    Math.atan()：返回参数的反正切（返回值为弧度值）
 */

console.log('------------Date--------------');
console.log(Date());
console.log(Date(2000, 1, 1));//不是new的,总是返回当前时间
console.log(new Date(2013, 0, 1, 0, 0, 0, 0));
//只要是能被Date.parse()方法解析的字符串，都可以当作参数
new Date('2013-2-15');
new Date('2013/2/15');
new Date('02/15/2013');
new Date('2013-FEB-15');
new Date('FEB, 15, 2013');
new Date('FEB 15, 2013');
new Date('February, 15, 2013');
new Date('February 15, 2013');
new Date('15 Feb 2013');
new Date('15, February, 2013');
console.log(Date.now());//返回时间戳
console.log(Date.parse('2011-10-10T14:48:00'));//返回时间戳
console.log(Date.parse('2011-10-10'));//返回时间戳
var d = new Date();
console.log(d.valueOf() == d.getTime());
console.log(d.toString());
console.log(d.toUTCString());//比北京时间晚8个小时
console.log(d.toISOString());//总是 UTC 时区的时间
console.log(d.toJSON());//总是 UTC 时区的时间
console.log(d.toDateString());
console.log(d.toTimeString());
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
console.log(d.toLocaleString('en-US'));
console.log(d.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }));
function leftDays() {
    var today = new Date();
    var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
    var msPerDay = 24 * 60 * 60 * 1000;
    return Math.round((endYear.getTime() - today.getTime()) / msPerDay);
}
console.log("本年度剩余:"+leftDays()+"天");

console.log('------------RegExp--------------');
var regex = /xyz/;
var regex = new RegExp('xyz');
var regex = /xyz/igm;
console.log(regex.ignoreCase);
console.log(regex.global);
console.log(regex.multiline);
console.log(regex.flags);
console.log(regex.lastIndex);
console.log(regex.source);
console.log(/cat/.test('cats and dogs'));//进行匹配
//正则实例对象的exec方法，用来返回匹配结果
var s = '_x_x';
var r1 = /x/;
var r2 = /y/;
console.log(r1.exec(s));
console.log(r2.exec(s));
var r = /a(b+)a/;
var arr = r.exec('_abbba_aba_');
console.log(arr);
/**
 * String.prototype.match()
 * String.prototype.search()
 * String.prototype.replace()
 * String.prototype.split()
 *  $&：匹配的子字符串。
    $`：匹配结果前面的文本。
    $'：匹配结果后面的文本。
    $n：匹配成功的第n组内容，n是从1开始的自然数。
    $$：指代美元符号$。
    ^ ：表示字符串的开始位置
    $ ：表示字符串的结束位置
    | ：表示或
    . ：点字符（.）匹配除回车（\r）、换行(\n) 、行分隔符（\u2028）和段分隔符（\u2029）以外的所有字符
    []：所有可供选择的字符都放在方括号内,只要有一个匹配就返回成功
    [^]：则表示除了字符类之中的字符，其他字符都可以匹配
    - ：表示连续,如0-9
    \d：匹配0-9之间的任一数字，相当于[0-9]。
    \D：匹配所有0-9以外的字符，相当于[^0-9]。
    \w：匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]。
    \W：除所有字母、数字和下划线以外的字符，相当于[^A-Za-z0-9_]。
    \s：匹配空格（包括换行符、制表符、空格符等），相等于[ \t\r\n\v\f]。
    \S：匹配非空格的字符，相当于[^ \t\r\n\v\f]。
    \b：匹配词的边界。
    \B：匹配非词边界，即在词的内部
    {}：模式的精确匹配次数,{n}表示恰好重复n次，{n,}表示至少重复n次，{n,m}表示重复不少于n次，不多于m次
    ? ：问号表示某个模式出现0次或1次，等同于{0,1}
    * ：星号表示某个模式出现0次或多次，等同于{0,}
    + ：加号表示某个模式出现1次或多次，等同于{1,}
    +?：表示某个模式出现1次或多次，匹配时采用非贪婪模式
    *?：表示某个模式出现0次或多次，匹配时采用非贪婪模式
    ??：表格某个模式出现0次或1次，匹配时采用非贪婪模式
 */
console.log('hello world'.replace(/(\w+)\s(\w+)/, '$2 $1'));//world hello
console.log('abc'.replace('b', '[$`-$&-$\']'));//a[a-b-c]c
var str = '3 and 5'.replace(/[0-9]+/g, function (match) {
    return 2 * match;
  });
console.log(str);
var a = 'The quick brown fox jumped over the lazy dog.';
var pattern = /quick|brown|lazy/ig;
a = a.replace(pattern, function replacer(match) {
  return match.toUpperCase();
});
console.log(a);//The QUICK BROWN fox jumped over the LAZY dog.
var prices = {
    'p1': '$1.99',
    'p2': '$9.99',
    'p3': '$5.00'
  };
  
  var template = '<span id="p1"></span>'
    + '<span id="p2"></span>'
    + '<span id="p3"></span>';
  
    template = template.replace(
    /(<span id=")(.*?)(">)(<\/span>)/g,
    function(match, $1, $2, $3, $4){
        console.log($1);
        console.log($2);
        console.log($3);
        console.log($4);
        
      return $1 + $2 + $3 + prices[$2] + $4;
    }
  );
  console.log(template);

var str = 'abcabc';
var reg = /(.)b(.)/g;
while (true) {
  var result = reg.exec(str);
  if (!result) break;
  console.log(result);
}

/**
 * JSON.stringify方法用于将一个值转为 JSON 字符串,会忽略对象的不可遍历的属性
 * JSON.parse方法用于将 JSON 字符串转换成对应的值
 */
console.log();

























