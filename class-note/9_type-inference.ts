// 타입 추론 기본 1
// var a = 10;
// var b = '10';

// function getC(c = 10) {
//     var d = 'hi';
//     return c + d;
// }

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'def',
// }

// var ef = shoppingItem;

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
}

var DetailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'bc',
    tag: 'cd',
}

// Best Common Type
var arr = [1,2,true];