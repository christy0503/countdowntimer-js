'use strict'

//新しいプジェクトを生成
// const obj1=new Object();
// console.log(obj1);

// //Mathオプジェクト
// const numPI=Math.PI;
// console.log(numPI);
// //Math.floor()は小数点以下を切り捨てる
// //Math.floor(Math.PI) Math.floor(Math.rando())
// console.log(Math.floor(numPI));

//乱数の生成と使い方
// const getRandom=(min,max)=>Math.random()*(max+1-min)+min;
// //min=1,max=4の範囲で乱数を生成させる
// console.log(Math.floor(getRandom(1,4)));
// //Math.ceilメソッド：小数点以下を切り上げる
// const rand=getRandom(1,4);
// console.log(Math.ceil(rand));

//Math.roundメソッド：小数点以下を四捨五入
// console.log(Math.round(rand));

//乱数を生成させる時の、使用例
//ランダムで任意の範囲の整数を取得する方法
// const getRandom=(min,max)=>Math.floor(Math.random()*(max+1-min))
// console.log(getRandom(1,100));

// //乱数を利用して配列から値を取り出す
// const arr=['大吉','吉','中吉','末吉','小吉','凶','大凶'];
// console.log(arr[Math.floor(Math.random()*arr.length)]);


// const arr=['大吉','吉','中吉','末吉','小吉','凶','大凶'];
// const cls=arr[Math.floor(Math.random()*arr.length)];
// console.log(cls);

//タイマー処理
//単純なタイマー処理
// const timer=()=>console.log('１秒経過');
// setTimeout(timer,1000); //1000ミリ秒に(１秒)後に関数timerを起動させる。

//setTimer関数を振り返し起動させる方法
// const timer=()=>{
//     console.log('１秒経過');
//     setTimeout(timer,1000);
// };
// timer();

//階乗計算5!=1*2*3*4*5
// function calc(n){
//     if(n==0)return 1;

//     console.log(n);
//     return n*calc(n-1);
// }
// console.log(calc(5));

//setTimeoutの応用
function timer() {
    const today = new Date();
  
    const yearEnd = new Date(today.getFullYear()-1, 11, 31, 23, 59, 59);
  
    const seconds = yearEnd - today;
  
    const second = Math.floor(seconds / 1000);
    const minutes = Math.floor(second / 60);
    const hours = Math.floor(minutes / 60);
    const Days = Math.floor(hours / 24);
  
    document.body.innerHTML = ` ${Days} 日 ${hours % 24} 小時 ${minutes % 60} 分鐘 ${second % 60} 秒`;
    if (Days < 0 && hours < 0 && minutes < 0 && second < 0 && seconds < 0) {
      document.body.innerHTML = "0年0日0時0分0秒";
      clearInterval(timer);
    }
  }
  
  setInterval(timer, 1000);
  
  timer();