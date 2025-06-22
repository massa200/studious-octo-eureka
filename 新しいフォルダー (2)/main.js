const text6 = document.getElementById('point');let point = 0;text6.textContent =point;
const Text3 = document.getElementById('引く2');let 引く2 = '　　くじを引く　　';Text3.textContent = 引く2;
const Text1 = document.getElementById('wait');let wait = '';Text1.textContent = wait;
const Text7 = document.getElementById('結果');let 結果 = '';Text7.textContent = 結果;
const Text8 = document.getElementById('結果2');let 結果2 = '';
const Text2 = document.getElementById('引く');let 引く = '';Text2.textContent = 引く;
const Text11 = document.getElementById('引く3');let 引く3 = '';Text11.textContent = 引く3;
const Text4 = document.getElementById('reset');let reset = '';Text4.textContent = reset;
const Text9 = document.getElementById('結果3');let 結果3 = '';Text9.textContent = 結果3;
const Text10 = document.getElementById('今回引いたもの');let 今回引いたもの = '';Text9.textContent = 今回引いたもの;
const Mikuji = document.getElementById('A');
const again = document.getElementById('ka');
const Text5 = document.getElementById('hiku');let hiku = 0;Text5.textContent =hiku;

Text3.onclick = function(){
hiku++;Text5.textContent =hiku;
let 引く2 = '↓引いてみましょう';Text3.textContent = 引く2;
let 引く = '振る';Text2.textContent = 引く;
let 引く3 = '引く';Text11.textContent = 引く3;
wait = '-----';Text1.textContent = wait;
reset = '';Text4.textContent = reset;
if (hiku >= 1) 
    {Mikuji.src = '新しいフォルダー (3)/ダウンロード (4).png';
    let 引く = '振る'; Text2.textContent = 引く;}
}
Text2.onclick = function(){
    Text7.textContent = '';Text9.textContent = 結果3;
    point++;text6.textContent=point;ff=1;
    Mikuji.src = '新しいフォルダー (3)/ダウンロード (3).png';reset = '引く';Text4.textContent = reset;let 引く3 = '';Text11.textContent = 引く3;
if (point>=10){
point= 0
}
if(point >=1){
wait = '中吉-';Text1.textContent = wait;
結果 = '　　中吉　　　　';ka='中吉';}
if (point >=2 ){
wait = '吉-';Text1.textContent = wait;
結果 = '　　吉　　　　';ka='吉';}
if (point >=3){
wait='小吉-';Text1.textContent = wait;
結果 = '　　小吉　　　　';ka='小吉';}
if (point >=4){
wait = '凶-';Text1.textContent = wait;
結果 = '　　凶　　　　';ka='凶';} 
if (point >=7){
wait ='不明-';Text1.textContent = wait;
結果 = '　　不明　　　　';ka='不明';}
if (point >=9){
wait = '大吉-';Text1.textContent = wait;
結果 = '　　大吉　　　　';ka='大吉';}   
}
Text4.onclick = function(){
    let point = 0;text6.textContent =point;let 引く3 = '引く';Text11.textContent = 引く3;
    let wait = '-----';Text1.textContent = wait;
    Mikuji.src = '新しいフォルダー (3)/ダウンロード (4).png';
    Text7.textContent = 結果;Text9.textContent = '　結果：';Text10.textContent = '今回引いたもの：'
    reset = '';Text4.textContent = reset;
if(ff>=1){結果2=結果2 + ka + '、';Text8.textContent = 結果2}
ff = 0}