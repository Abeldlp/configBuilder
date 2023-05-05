import { ConfigOption, Options } from "./types";

function defaultOptions(): Options {
  return {
    size: 10,
    color: "red",
    length: 10,
    width: 10,
  };
}

let ButtonConfig = defaultOptions();

export function withColor(color: string) {
  return {
    color: color,
  };
}

export function withSize(size: number) {
  return {
    size: size,
  };
}

export function withLength(length: number) {
  return {
    length: length,
  };
}

export function withWidth(width: number) {
  return {
    width: width,
  };
}

export function ConfigureButton(...options: ConfigOption[]): Options {
  options.forEach((option) => {
    ButtonConfig = { ...ButtonConfig, ...option };
  });
  return ButtonConfig;
}
