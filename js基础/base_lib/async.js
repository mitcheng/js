//js是只在一个线程上运行,单线程模型
//同步任务:在主线程上排队执行的任务
//异步任务:那些被引擎放在一边，不进入主线程、而进入任务队列的任务
//任务队列(task queue)和事件循环
//主线程执行全部的同步任务,再去任务队列取异步任务,满足条件就执行异步任务(又变成同步任务了),执行完再取异步任务
//那引擎怎么知道异步任务有没有结果,能不能进入主线程?--->事件循环
/**
//异步任务的表现形式
//  1.回调
function f1(callback) {
    console.log('f1');
    callback();
}

function f2() {
    console.log('f2');
}
f1(f2);
//  2.事件监听,事件驱动模式
f1.on('done', f2);//f1绑定on事件
function f1() {
    setTimeout(function () {
      f1.trigger('done');//f1触发on事件,执行on事件的监听f2
    }, 1000);
}
//  3.发布/订阅,事件统一由jQuery管理
jQuery.subscribe('done', f2);
function f1() {
    setTimeout(function () {
      jQuery.publish('done');
    }, 1000);
}
jQuery.unsubscribe('done', f2);//f2可以取消事件监听
 */
//异步操作的流程控制
// function async(arg, callback) {
//     console.log('参数为 ' + arg +' , 1秒后返回结果');
//     setTimeout(function () { callback(arg * 2); }, 1000);
// }
// async(1,function() {
//     async(2,function() {
//         async(3,function() {
//         });
//     });
// });
//  1.串行执行
var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];
function async(arg, callback) {
  console.log('参数为 ' + arg +' , 1秒后返回结果');
  setTimeout(function () { callback(arg * 2); }, 1000);
}
function final(value) {
  console.log('完成: ', value);
}
// function series(item) {
//   if(item) {
//     async( item, function(result) {
//       results.push(result);
//       return series(items.shift());
//     });
//   } else {
//     return final(results[results.length - 1]);
//   }
// }
// series(items.shift());
//  2.并行执行,同时发起六个异步任务
// items.forEach(function(item) {
//     async(item, function(result){
//       results.push(result);
//       if(results.length === items.length) {
//         final(results[results.length - 1]);
//       }
//     })
// });
//  3.并行与串行的结合
var running = 0;
var limit = 2;
function launcher() {
  while(running < limit && items.length > 0) {
    var item = items.shift();
    async(item, function(result) {
      results.push(result);
      running--;
      if(items.length > 0) {
        launcher();
      } else if(running == 0) {
        final(results);
      }
    });
    running++;
  }
}
// launcher();


//定时器
//1.setTimeout():指定某个函数或某段代码，在多少毫秒之后执行
// var timerId = setTimeout(func|code, delay);
console.log(1);
setTimeout(function() {
    console.log(2);
},1000);
console.log(3);
setTimeout(function (a,b) {
    console.log(a + b);
}, 1000, 1, 1);

var x = 1;
var obj = {
  x: 2,
  y: function () {
    console.log(this.x);
  }
};
setTimeout(obj.y, 1000);//1
setTimeout(function () {
    obj.y();
}, 1000);//2
setTimeout(obj.y.bind(obj), 1000);//2

//2.setInterval():指定某个任务每隔一段时间就执行一次
//3.clearTimeout(),clearInterval()
//4.setTimeout(f, 0):下一轮事件循环一开始就执行






















