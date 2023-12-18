/**
 * infer
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;
