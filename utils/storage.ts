import { MMKV } from "react-native-mmkv";

type Storage = {
  getItem: <T>(name: string) => T | null;
  setItem: (name: string, value: any) => void;
  removeItem: (name: string) => void;
};

const storage = new MMKV();

const localStorage: Storage = {
  getItem: (name) => {
    try {
      const value = storage.getString(name);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(`Error getting item from storage: ${error}`);
      return null;
    }
  },
  setItem: (name, value) => {
    try {
      storage.set(name, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item in storage: ${error}`);
    }
  },
  removeItem: (name) => {
    try {
      storage.delete(name);
    } catch (error) {
      console.error(`Error removing item from storage: ${error}`);
    }
  },
};

export default localStorage;
