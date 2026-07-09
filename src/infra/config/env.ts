import "dotenv/config";

export const env = {
  PORT: Number(process.env.PORT) || 3000,
  RESEND_API_KEY: process.env.RESEND_API_KEY!,
  EMAIL_TO: process.env.EMAIL_TO!,
  URL_FRONTEND: process.env.URL_FRONTEND!,
};