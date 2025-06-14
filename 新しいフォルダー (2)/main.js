const text6 = document.getElementById('point');let point = 0;text6.textContent =point;
const Text3 = document.getElementById('引く2');let 引く2 = 'くじを引く';Text3.textContent = 引く2;
const Text1 = document.getElementById('wait');let wait = '';Text1.textContent = wait;
const Text7 = document.getElementById('結果');let 結果 = '';Text7.textContent = 結果;
const Text2 = document.getElementById('引く');let 引く = '';Text2.textContent = 引く;
const Text4 = document.getElementById('reset');let reset = '';Text4.textContent = reset;
const Mikuji = document.getElementById('A');
const again = document.getElementById('ka');
const Text5 = document.getElementById('hiku');let hiku = 0;Text5.textContent =hiku;

Text3.onclick = function(){
hiku++;Text5.textContent =hiku;
let 引く2 = '';Text3.textContent = 引く2;
let 引く = '振る';Text2.textContent = 引く;
reset = '引く';Text4.textContent = reset;
wait = '-----';Text1.textContent = wait;

if (hiku >= 1) {
    Mikuji.src = '新しいフォルダー (3)/ダウンロード (3).png';
    let 引く = '振る'; Text2.textContent = 引く;
}}
Text2.onclick = function(){
    Text7.textContent = '';
    point++;text6.textContent=point;
if (point>=10){
point= 0
}
if(point >=1){
wait = '中吉-';Text1.textContent = wait;}
結果 = '中吉-';
if (point >=2 ){
wait = '吉-';Text1.textContent = wait;
結果 = '吉-';}
if (point >=3){
wait='小吉-';Text1.textContent = wait;
結果 = '小吉-';}
if (point >=4){
wait = '凶-';Text1.textContent = wait;
結果 = '凶-';} 
if (point >=7){
wait ='不明-';Text1.textContent = wait;
結果 = '不明-';}
if (point >=9){
wait = '大吉-';Text1.textContent = wait;
結果 = '大吉-';}   
}
Text4.onclick = function(){
    let point = 0;text6.textContent =point;
    let wait = '-----';Text1.textContent = wait;
    Text7.textContent = 結果;
}
    
