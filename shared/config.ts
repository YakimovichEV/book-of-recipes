export const appConfig = {
    SERVER_URI: process.env.SERVER_URI || "",
    IS_SERVER: typeof window === "undefined",
    APOLLO_STATE_PROP_NAME: "__APOLLO_STATE__",
    MONGODB_URL: process.env.DB_URL,
    IS_PRODUCTION: process.env.NODE_ENV === "production",
} as const;
