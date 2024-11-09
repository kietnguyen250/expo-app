// storeConfig.ts

import localStorage from "@/utils/storage";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const createStore = <T>(store: (set: any) => T, name: string) =>
  create(
    devtools(
      persist(store, {
        name,
        storage: localStorage,
      }),
      { name }
    )
  );
