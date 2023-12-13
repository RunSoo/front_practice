/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  // name: number; 충돌 허용 안됨
  //   name: "hello"; 이건 불가능
  age: number;
}

interface Developer extends Person {
  name: "hello"; // 이건 가능
}

const person: Person = {
  name: "",
  age: 27,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
