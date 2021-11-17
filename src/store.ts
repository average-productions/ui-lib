export enum Theme {
  LIGHT = "light-theme",
  DARK = "dark-theme",
}

export enum STORE_KEY {
  STORE_THEME = "store.ui.theme",
}

interface StoredData {
  [STORE_KEY.STORE_THEME]: Theme;
}

const NAME = "wlx";

const defaultValues = {
  [STORE_KEY.STORE_THEME]: Theme.LIGHT,
};

let storedData: StoredData = { ...defaultValues };
const storedStringData = window.localStorage.getItem(NAME);
if (storedStringData) {
  try {
    storedData = { ...defaultValues, ...JSON.parse(storedStringData) };
  } catch (err) {}
}

export const Store = {
  getValue<T>(key: keyof StoredData) {
    return storedData[key] as unknown as T;
  },

  setValue<Key extends keyof StoredData>(key: Key, value: StoredData[Key]) {
    storedData[key] = value;
    try {
      window.localStorage.setItem(NAME, JSON.stringify(storedData));
    } catch (err) {
      //Do not log
    }
  },

  getStorage() {
    return storedData;
  },
};
