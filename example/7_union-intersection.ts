// function LogMessage(value: any): void {
//   console.log(value);
// }
// LogMessage('Hello');
// LogMessage(false);

var seho: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value == 'number') {
    value.toLocaleString();
  }
  if (typeof value == 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage("");
logMessage(1);

interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  // someone.name
}
askSomeone( {name: '디벨로퍼', skill: '웹 개발'} );
askSomeone( {name: '캡틴', age: 100} );

function askSomeone2(someone: Developer & Person) {
  someone.name
  someone.age
  someone.skill
}

askSomeone2({name: '디벨로퍼', skill: '웹 개발', age: 100});