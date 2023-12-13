/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person = {
  name: "이정환",
  sayHi: function () {
    console.log("Hi");
  },
};
