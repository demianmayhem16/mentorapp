import 'dotenv/config';
import type { Config } from 'drizzle-kit';
export default {
  schema: "./lib/schema.ts",
  out: './drizzle',
  driver: "pg",
  dbCredentials: {
    connectionString: "postgres://default:xptPLD0B2YXZ@ep-dark-voice-a4sa0usz-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require",
  },
}  as Config;


