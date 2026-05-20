import it from './it';
import de from './de';
import en from './en';

export const languages = {
  it: 'Italiano',
  de: 'Deutsch',
  en: 'English',
};

export const defaultLang = 'it';

export const ui = { it, de, en } as const;

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return ui[lang];
}

export function getLocalizedPath(lang: Lang, path: string = '') {
  if (lang === defaultLang) return `/${path}`.replace(/\/+/g, '/');
  return `/${lang}/${path}`.replace(/\/+/g, '/');
}
