// void

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined;

// never
// 존재하지 않는, 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  // 실행되면 프로그램이 바로 중지될 것이기 때문에
  throw new Error();
}

let b: never;
// b = 1;
// b = {};
// b = "";
// b = undefined;
// b = null;
