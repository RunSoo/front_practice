/**
 * 맵드 타입
 *
 * 인터페이스에서는 쓸 수 없음
 */
// 한명의 유저 정보를 불러오는 기능
function fetchUser() {
    // ... 기능
    return {
        id: 1,
        name: "이정환",
        age: 27,
    };
}
// 한명의 유저 정보를 수정하는 기능
function updateUser(user) {
    // ...수정하는 기능
}
updateUser({
    // id: 1,
    // name: "이정환",
    age: 25,
});
export {};
