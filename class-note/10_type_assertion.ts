// 타입 단언 - typescript가 타입을 모를 때 as를 사용하여 직접 단언해줌.
var a;
a = 20;
a = 'bc'
var b = a as string;

// DOM API 조작 - web page에 접근할 수 있는 것을 dom api라고 함.
// <div id="app">hi</div>

var div  = document.querySelector('div');
if (div) {
    div.innerText
}