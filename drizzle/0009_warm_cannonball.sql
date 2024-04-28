CREATE TABLE IF NOT EXISTS "temporaryProductTemplates" (
	"id" text PRIMARY KEY NOT NULL,
	"bpm" integer,
	"user_id" integer,
	"key" text,
	"title" text,
	"productType" text,
	"imageUrl" text,
	"audioUrlMp3" text,
	"audioUrlWav" text,
	" trackStemsZip" text,
	"publicTaggedAudio" text
);
--> statement-breakpoint
ALTER TABLE "products" RENAME COLUMN "audioUrl" TO "audioUrlMp3";--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "audioUrlWav" text;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN " trackStemsZip" text;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "publicTaggedAudio" text;