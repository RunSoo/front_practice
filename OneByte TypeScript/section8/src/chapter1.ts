/**
 * 인덱스드 액세스 타입
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    age: number;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: "1",
    name: "홍길동",
    age: 28,
  },
};

type PostList = {
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: "1",
    name: "홍길동",
    age: 27,
  },
};

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// type Tup3 = Tup[3];

type TupNum = Tup[number];
