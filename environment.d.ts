// This file is needed to support autocomplete for process.env
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // liveblocks api key
      NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY: string;
    }
  }
}
