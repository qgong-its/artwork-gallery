const STORAGE_KEY = 'localArtworks';

export const loadFromStorage = <T>(key: string, fallback: T): T => {
  try {
    const rawData = localStorage.getItem(key);

    if (!rawData) {
      return fallback;
    }

    return JSON.parse(rawData) as T;
  } catch {
    return fallback;
  }
}

export const saveToStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
}

export { STORAGE_KEY };
