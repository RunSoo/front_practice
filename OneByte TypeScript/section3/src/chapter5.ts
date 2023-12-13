/**
 * 타입 추론
 */

let a = 10;
// a="string";

let b = "hello"; // 변수의 초기값 기준으로 추론
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterload",
  },
  urls: ["https://winterload.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d; // 명시적으로 any 타입을 지정하는 것과는 다름
d = 10;
d.toFixed();
// d.toUpperCase();

d = "hello";
// d.toFixed();
d.toUpperCase(); // 암묵적 any 타입의 진화

// 암묵적 any는 추천하지 않음

const num = 10; // 리터럴 타입으로 추론
const str = "str";

let arr = [1, "string"]; // union 타입으로 추론
