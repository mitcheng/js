var arr = ['a', 'b', 'c'];
var arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr[2] = 'c';
var arr = [
    {a: 1},
    [1, 2, 3],
    function() {return true;}
  ];
  console.log(arr[0]);
  console.log(arr[1]);
  console.log(arr[2]());

  //多维数组
  var a = [[1, 2], [3, 4]];

  console.log(typeof a);
  console.log(Object.keys(a));

  //数组成员最多只有 4294967295 个（2的32次方 - 1）个，也就是说length属性的最大值就是 4294967295
  ['a', 'b', 'c'].length // 3
  var arr = ['a', 'b'];
  arr.length // 2
  
  arr[2] = 'c';
  arr.length // 3
  
  arr[9] = 'd';
  arr.length // 10

  // 清除元素
  var arr = [ 'a', 'b', 'c' ];
  arr.length = 0;
  arr; // []

  // 设置报错
//   [].length = -1;
//   [].length = Math.pow(2, 32);
//   [].length = 'abc';

  var a = [];
  a['p'] = 'abc';
  console.log(a.length); // 0
  a[1] = '123';
  console.log(a.length);//2
  a[2.1] = 'abc';
  console.log(a.length); //还是2
  for (const key in a) {
      if (a.hasOwnProperty(key)) {
          const element = a[key];
          console.log(":"+element);
      }
  }

  //如果数组的某个位置是空位，in运算符返回false
  var arr = [];
  arr[100] = 'a';
  100 in arr // true
  1 in arr // false
  console.log(arr.hasOwnProperty(100));
  console.log(arr.hasOwnProperty(1));

  var a = [1, , 1];
  console.log(a[1]);
  for (var key in a) {
    if (a.hasOwnProperty(key)) {
        var element = a[key];
        console.log(":"+element);
    }
  }
  var a = [1, 2, 3];
  delete a[1];
  console.log(a);

  function args() { return arguments }
  var arrayLike = args('a', 'b');
  //数组的slice方法可以将“类似数组的对象”变成真正的数组
  var arr = Array.prototype.slice.call(arrayLike);//转成真正的数组
  console.log(arrayLike instanceof Array);//false
  console.log(arr instanceof Array);//true

  // foreach的方法体
  function print(value, index) {
    console.log(index + ' : ' + value);
  }
  //通过call()把数组的方法放到对象上面
  Array.prototype.forEach.call(arrayLike, print);

  Array.prototype.forEach.call('abc', function (chr) {
    console.log(chr);
  });
