/**
 * keyof 연산자
 */
function getPropertyKey(person, key) {
    return person[key];
}
const person = {
    name: "이정환",
    age: 27,
};
getPropertyKey(person, "name");
export {};
