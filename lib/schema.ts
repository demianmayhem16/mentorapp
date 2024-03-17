import {
    timestamp,
    pgTable,
    text,
    serial,
    varchar,
    primaryKey,
    integer,
    date,
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
    id: text('id').notNull().primaryKey(),
    title: text('beat'),
    price: text('290').notNull()
})
