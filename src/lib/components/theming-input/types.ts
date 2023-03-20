export interface ThemingInputEvents {
  resetStyle: void;
  clearStyle: void;
}

export type ThemingInputEvent<K extends keyof ThemingInputEvents> = ThemingInputEvents[K];
