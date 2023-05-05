import { withColor, withLength, withSize, withWidth } from ".";

export interface Options {
  size: number;
  color: string;
  length: number;
  width: number;
}
export type ConfigOption =
  | ReturnType<typeof withColor>
  | ReturnType<typeof withSize>
  | ReturnType<typeof withLength>
  | ReturnType<typeof withWidth>;
