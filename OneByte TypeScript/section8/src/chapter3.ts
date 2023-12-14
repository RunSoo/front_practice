/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ...
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

function updateUser(user: User) {
  // ...수정하는 기능
}

// updateUser({
//   age: 25,
// });
