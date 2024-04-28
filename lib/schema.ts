import { relations } from 'drizzle-orm'
import {
    timestamp,
    pgTable,
    text,
    integer,
    boolean
} from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
    id: text('id').notNull().primaryKey(),
    name: text('name'),
    email: text('email').notNull(),
    emailVerified: timestamp('emailVerified', { mode: 'date' }),
    role: text('role')
})

export type User = typeof users.$inferSelect // return type when queried
export type NewUser = typeof users.$inferInsert // insert type

//-------------------  PRODUCTS  -------------------------------------

export const products = pgTable('products', {
    id: text('id').notNull().primaryKey(),
    isFreeProduct: boolean('isFreeProduct'),
    content: text('content'),
    title: text('title'),
    ownerId: integer('owner_id'),
    price: text('price'),
    key: text('key'),
    bpm: text('bpm'),
    productType: text('productType'),
    imageUrl: text('imageUrl'),
    audioUrlMp3: text('audioUrlMp3'),
    audioUrlWav: text('audioUrlWav'),
    trackStemsZip: text(' trackStemsZip'),
    publicTaggedAudio: text('publicTaggedAudio')
    // productType: text('type').choices(['beat', 'loop', 'loopkit', 'beatpack'])
})

export type Product = typeof products.$inferSelect 
export type NewProduct = typeof products.$inferInsert 


export const productsRelations = relations(products, ({ one }) => ({
    owner: one(users, {
        fields: [products.ownerId],
        references: [users.id]
    })
}))

//-------------------  PRODUCTS  -------------------------------------





//-------------------  TEMPLATES  -------------------------------------

export const templates = pgTable('templates', {
    id: text('id').notNull().primaryKey(),
    bpm: integer('bpm'),
    userId: text('user_id'),
    key: text('key'),
    title: text('title'),
    isDefault: boolean('isDefault'),
    productType: text('productType')
})

export const templatesRelations = relations(templates, ({ one }) => ({
    userId: one(users, {
        fields: [templates.userId],
        references: [users.id]
    })
}))

export type Template = typeof templates.$inferSelect 
export type NewTemplate = typeof templates.$inferInsert

//-------------------  TEMPLATES  -------------------------------------








//-------------------  TEMP PRODUCTS TEMPLATES  -------------------------------------

export const temporaryProductTemplates = pgTable('temporaryProductTemplates', {
    id: text('id').primaryKey(),
    bpm: integer('bpm'),
    userId: text('user_id'),
    key: text('key'),
    title: text('title'),
    productType: text('productType'),
    imageUrl: text('imageUrl'),
    audioUrlMp3: text('audioUrlMp3'),
    audioUrlWav: text('audioUrlWav'),
    trackStemsZip: text(' trackStemsZip'),
    publicTaggedAudio: text('publicTaggedAudio')
})

export type TemporaryProduct = typeof temporaryProductTemplates.$inferSelect 
export type NewTemporaryProduct = typeof temporaryProductTemplates.$inferInsert 


export const temporaryProductTemplatesRelations = relations(temporaryProductTemplates, ({ one }) => ({
    userId: one(users, {
        fields: [temporaryProductTemplates.userId],
        references: [users.id]
    })
}))
//-------------------  TEMP PRODUCTS TEMPLATES  -------------------------------------




//-----------------------------------------------------------

export const usersRelations = relations(users, ({ many, one }) => ({
    products: many(products),
    templates: many(templates),
    temporaryProductTemplates: one(temporaryProductTemplates)
}))
