ALTER TABLE "products" RENAME COLUMN "290" TO "price";--> statement-breakpoint
ALTER TABLE "users" RENAME COLUMN "beatmaker" TO "role";--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "bpm" SET DATA TYPE text;