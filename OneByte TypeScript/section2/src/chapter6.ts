// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar;

// unknownVar.toUpperCase();

if (typeof unknownVar === "number") {
  num = unknownVar;
}
