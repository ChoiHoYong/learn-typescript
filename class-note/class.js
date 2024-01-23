//ES2015 (ES6)
class Person {
    // 클래스 로직
    // 초기화 메소드
    constructor(name, age) {
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;

    }
}

var hoyong = new Person('호용', 25);
console.log(hoyong);