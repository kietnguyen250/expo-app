import en from "./en";

type TranslationKeys = typeof en;

export type MainLocaleKeys = keyof TranslationKeys;

type LocaleChildKeys<T extends MainLocaleKeys | undefined> =
  T extends MainLocaleKeys
    ? keyof TranslationKeys[T]
    : keyof {
        [P in keyof TranslationKeys]: `${P}.${keyof TranslationKeys[P]}`;
      };

export type LocaleKeys<T extends MainLocaleKeys | undefined> =
  T extends MainLocaleKeys ? LocaleChildKeys<T> : `${MainLocaleKeys}.${string}`;
