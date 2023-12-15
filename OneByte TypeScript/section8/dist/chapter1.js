/**
 * 인덱스드 액세스 타입
 */
function printAuthorInfo(author) {
    console.log(`${author.name}-${author.id}`);
}
const post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: "1",
        name: "홍길동",
        age: 28,
    },
};
function printAuthorInfo2(author) {
    console.log(`${author.name}-${author.id}`);
}
const post2 = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: "1",
        name: "홍길동",
        age: 27,
    },
};
export {};
