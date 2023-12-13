/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {
    // 필드들은 무조건 public
    this.name = name;
    this.moveSpeed = moveSpeed;
    this.extra = extra;
  }

  move(): void {
    console.log(`${this.moveSpeed}로 이동`);
  }
}
