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

export const users = pgTable('user', {
    id: text('id').notNull().primaryKey(),
    name: text('name'),
    email: text('email').notNull(),
    emailVerified: timestamp('emailVerified', { mode: 'date' }),
    role: text('beatmaker')
})

export const products = pgTable('product', {
    id: text('id').notNull().primaryKey(),
    title: text('beat'),
    price: text('290').notNull()
})
