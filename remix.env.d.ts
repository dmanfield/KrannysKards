/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STRIPE_SECRET_KEY: string;
    }
  }
}

export {};
