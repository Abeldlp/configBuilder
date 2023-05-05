export class ButtonConfig {
  private size: number;
  private color: string;
  private length: number;
  private width: number;

  constructor() {
    this.size = 10;
    this.color = "red";
    this.length = 10;
    this.width = 10;
  }

  withColor(color: string) {
    this.color = color;
    return this;
  }

  withSize(size: number) {
    this.size = size;
    return this;
  }

  withLength(length: number) {
    this.length = length;
    return this;
  }

  withWidth(width: number) {
    this.width = width;
    return this;
  }
}
