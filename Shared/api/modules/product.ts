import { db } from '@/lib/db'
import {  products, NewProduct, Product } from '@/lib/schema'
import { eq } from 'drizzle-orm';

export const productApi = {
    createProduct(product: NewProduct): Promise<Product[]> {
        return db.insert(products).values(product).returning()
    },

    deleteProduct(id: string): Promise<Product[]> {
        return db.delete(products)
        .where(eq(products.id, id))
        .returning();
    },
    
    getProduct: async (id: string) => {
        return await db.query.products.findFirst({ where: (products, { eq }) => eq(products.id, id) })
    },

    getUserProducts: async (userId: number) => {
        return await db.query.products.findMany({ where: (products, { eq }) => eq(products.ownerId, userId) })
    },
}
