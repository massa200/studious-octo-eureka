const Text1 = document.getElementById('wait');let wait = '';Text.textContent = wait;
const Text2 = document.getElementById('引く');let 引く = '';Text2.textContent = 引く;
const Text3 = document.getElementById('引く2');let 引く2 = 'くじを引く';Text3.textContent = 引く2;
const Text4 = document.getElementById('reset');let reset = '';Text4.textContent = reset;
let hiku = 0
Text3.onclick = function(){
hiku++
引く2 = '';Text3.textContent = 引く2;
引く = '引く';Text2.textContent = 引く;
reset = 'reset';Text4.textContent = reset;
wait = '-----';Text1.textContent = wait;
}

if (hiku = 1){
    this.src = '新しいフォルダー(3)/ダウンロード(3).png';}
