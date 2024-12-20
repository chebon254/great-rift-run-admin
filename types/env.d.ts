declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SITE_URL: string;
      NEXT_PUBLIC_ADMIN_URL: string;
      DATABASE_URL: string;
      SHADOW_DATABASE_URL: string;
    }
  }