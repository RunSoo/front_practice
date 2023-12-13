let user: {
  id?: number; // optional property
  name: string; // 객체 리터럴 타입
} = {
  // object
  id: 1,
  name: "이정환",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
