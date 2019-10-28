/**
 * 原始类型
    * 数值
    * 字符串
    * 布尔值
 * undefined:为定义,不存在
 * null:空值
 * 对象(object)
 * 数组(array)
 * 函数(function)
 */

 /**
  * typeof:返回一个值的数据类型
  * instanceof
  * Object.prototype.toString
  */
 var a = new Array();
 console.log(typeof(a) == "object");
 console.log(typeof(null) == "object");
 console.log(a instanceof Array);
 console.log(a instanceof Object);

 /**
  * null是一个表示“空”的对象，转为数值时为0；
  * undefined是一个表示"此处无定义"的原始值，转为数值时为NaN。
  * NaN:非数字,不是类型是特殊数值,不等于任何值,包括自己,所以是false
  */

  /**
   * JavaScript 语言的底层根本没有整数，所有数字都是小数（64位浮点数）
   */

   console.log(1/-0)
   console.log(1/0)
   console.log(1/0 === 1/-0)

   /**
    * parseInt方法用于将字符串转为整数。
    * parseFloat方法用于将一个字符串转为浮点数
    *   如果参数不是字符串，或者字符串的第一个字符不能转化为浮点数，则返回NaN
    * isNaN方法可以用来判断一个值是否为NaN
    */
   console.log(parseInt("123.1"));
   console.log(parseInt('15x'));
   console.log(parseInt('1p5x'));
   console.log(parseInt('abc'));//打头没数字,NaN
   console.log(parseInt(0.0000008));//会自动转换城科学计数法,所以很诡异

   console.log(parseFloat([])); // NaN
   console.log(parseFloat('FF2')); // NaN
   console.log(parseFloat('')); // NaN

   /**
    * isFinite方法返回一个布尔值，表示某个值是否为正常的数值
    */
    isFinite(Infinity) // false
    isFinite(-Infinity) // false
    isFinite(NaN) // false
    isFinite(undefined) // false
    isFinite(null) // true
    isFinite(-1) // true