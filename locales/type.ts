// import en from "./en";

import en from "./en";

// // Automatically infer the structure of the `en` keys
type DefaultNamespace = typeof en;

// Use `DefaultNamespace` to define nested keys
// type TranslationKeys<T> = T extends object
//   ? {
//       [K in keyof T]: K extends string
//         ? `${K}` | `${K}.${TranslationKeys<T[K]>}`
//         : never;
//     }[keyof T]
//   : "";

// export type LocaleKeys = TranslationKeys<DefaultNamespace>;

type NestedKeys<T> = {
  [K in keyof T]: K extends string
    ? T[K] extends object
      ? `${K}` | `${K}.${NestedKeys<T[K]>}`
      : `${K}`
    : never;
}[keyof T];

export type LocaleKeys = NestedKeys<DefaultNamespace>;
