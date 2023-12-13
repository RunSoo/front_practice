// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "이정환",
  nickname: "힝구",
  birth: "1999.10.29",
  bio: "안녕하세요",
  location: "string",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
};

let countryNumberCodes: { [key: string]: number } = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
