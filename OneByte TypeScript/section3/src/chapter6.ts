/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단원의 규칙
 * 값 as 단언 <= 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;
let num3 = 10 as unknown as string; // 절대로 좋은 방법은 아님

/**
 * const 단언
 */

let num4 = 10 as const; // const로 선언한것과 같은 효과 만들어주는 단언

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// cat.name = "";

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "이정환",
};

const len: number = post.author!.length; // !를 붙여주면 null이거나 undefined가 아닐 것이라고 믿게 해줌
