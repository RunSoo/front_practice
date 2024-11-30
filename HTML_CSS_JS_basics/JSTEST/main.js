let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(new Date("2024-11-30").getDay()); // 토요일
console.log(new Date("2024-12-01").getDay()); // 일요일
console.log(new Date("2024-12-02").getDay()); // 월요일

// String (문자 데이터)
let myName = "Hyunsoo";
let email = "thesecon@gmail.com";
let hello = `Hello ${myName}`;

console.log(myName);
console.log(email);
console.log(hello);

// Number(숫자 데이터)
let number = 123;
let opacity = 1.57;

console.log(number);
console.log(opacity);

// boolean(불린 데이터)
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

// Undefined: 값이 할당되지 않은 상태
let undef;
let obj = { abc: 123 };

console.log(undef);
console.log(obj.abc);
console.log(obj.xyz);

// Null: 의도적으로 비어있음
let empty = null;

console.log(empty);

// Object(객체 데이터)

let user = {
  // Key: Value
  name: "Hyunsoo",
  age: 26,
  isValid: true,
};

console.log(user.name);
console.log(user.age);
console.log(user.isValid);

// Array(배열 데이터)
let fruitArr = ["Apple", "Banana", "Cherry"];

console.log(fruitArr[0]);
console.log(fruitArr[1]);
console.log(fruitArr[2]);

// let: 재사용 가능. 변수 선언
let a = 2;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

a = 999;
console.log(a);

const c = 12;
// c = 999; // TypeError: Assignment to constant variable.
console.log(c);

// 함수 선언
function helloFunc() {
  // 실행 코드
  console.log(1234);
}

// 함수 호출
helloFunc();

function returnFunc() {
  return 123;
}

let d = returnFunc();

console.log(d);

// 함수 선언
function sum(a, b) {
  // a, b는 매개변수(Parameter)
  return a + b;
}

let sumA = sum(1, 2); // 1, 2는 인수(arguments)
let sumB = sum(7, 12);
let sumC = sum(2, 4);

console.log(sumA, sumB, sumC);

// 가명(이름이 있는) 함수
// 함수 선언
function helloFunc() {
  console.log("Hello");
}

// 익명 함수
// 함수 표현
let world = function () {
  console.log("World");
};

helloFunc();
world();

// 객체 데이터
const hyunsoo = {
  name: "Hyunsoo",
  age: 26,
  getName: function () {
    // 함수를 속성처럼 사용 => 메소드
    return this.name;
  },
};

const herName = hyunsoo.getName(); // 함수 호출
console.log(herName);
console.log(hyunsoo.getName());
