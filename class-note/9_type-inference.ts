// 타입 추론 기본 1
var a = 10;
var b = '10';

function getC(c = 10) {
    var d = 'hi';
    return c + d;
}

// 타입 추론 기본 2
interface Dropdown<T> {
    value: T;
    title: string;
}

var shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'def',
}