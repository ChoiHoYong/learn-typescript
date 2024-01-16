// 인터페이스
interface User {
  name: string;
  age: number;
}

// 변수에 인터페이스 활용
var seho: User = { 
  name: '세호',
  age: 33 
};

// 함수에 인터페이스 활용
function getUser(user: User):void {
  console.log(user);
}
getUser({
  name: '1',
  age: 100
});

// 함수의 스펙에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string
}

var arr: StringArray = ['a', 'b', 'c'];

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp
}

var obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
// obj['cssFile'] = '/.aaa.css'

Object.keys(obj).forEach(function(value){

})

// 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person{
  language: string;
}

var capt: Developer = {
  name: 'hoyong',
  age: 25,
  language: 'ts',
}


// 함수의 전체 타입에 사용하는 경우
// interface SumFunction {
//   (a: number, b: number): number;
// }
// let sum: SumFunction;
// sum = function (num1: number, num2: string): number {
//   return num1 + num2;
// };

// 배열의 인덱싱에 사용하는 경우
// interface StringArray {
//   [index: number]: string;
// }
// let arr: StringArray;
// arr[0] = 'hi';
// arr[1] = 10;

// 인터페이스 확장
interface Person {
  name: string;
  age: number; // 옵셔널 선택자 ? 동일하게 적용 가능
}
interface Developer extends Person {
  language: string;
}
const joo: Developer = { name: 'joo', age: 20, language: 'ts' };
