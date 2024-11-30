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
c = 999; // TypeError: Assignment to constant variable.
console.log(c);
