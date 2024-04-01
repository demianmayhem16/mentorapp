import { relations } from 'drizzle-orm'
import {
    timestamp,
    pgTable,
    text,
    serial,
    varchar,
    primaryKey,
    integer,
    boolean
} from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
    id: text('id').notNull().primaryKey(),
    name: text('name'),
    email: text('email').notNull(),
    emailVerified: timestamp('emailVerified', { mode: 'date' }),
    role: text('beatmaker')
})

export type User = typeof users.$inferSelect // return type when queried
export type NewUser = typeof users.$inferInsert // insert type

export const products = pgTable('products', {
    id: serial('id').primaryKey(),
    isFreeProduct: boolean('isFreeProduct'),
    content: text('content'),
    title: text('title'),
    ownerId: integer('owner_id'),
    price: text('290'),
    key: text('key'),
    bpm: integer('bpm'),
    productType: text('productType')
    // productType: text('type').choices(['beat', 'loop', 'loopkit', 'beatpack'])
})

export const templates = pgTable('templates', {
    id: serial('id').primaryKey(),
    bpm: integer('bpm'),
    userId: integer('user_id'),
    key: text('key'),
    title: text('title'),
    isDefault: boolean('isDefault'),
    productType: text('productType')
})

export const postsRelations = relations(products, ({ one }) => ({
    owner: one(users, {
        fields: [products.ownerId],
        references: [users.id]
    })
}))

export const templatesRelations = relations(templates, ({ one }) => ({
    userId: one(users, {
        fields: [templates.userId],
        references: [users.id]
    })
}))

export const usersRelations = relations(users, ({ many }) => ({
    products: many(products),
    templates: many(templates)
}))
