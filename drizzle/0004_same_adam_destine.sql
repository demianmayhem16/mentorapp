CREATE TABLE IF NOT EXISTS "templates" (
	"id" serial PRIMARY KEY NOT NULL,
	"bpm" integer,
	"user_id" integer,
	"key" text,
	"title" text,
	"isDefault" boolean,
	"productType" text
);
--> statement-breakpoint
ALTER TABLE "products" RENAME COLUMN "beat" TO "title";--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "290" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "isFreeProduct" boolean;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "content" text;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "owner_id" integer;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "key" text;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "bpm" integer;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "productType" text;