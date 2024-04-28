'use server'
import { db } from '@/lib/db'
import {  temporaryProductTemplates, NewTemporaryProduct, TemporaryProduct } from '@/lib/schema'
import { eq } from 'drizzle-orm';


export async function deleteTempProduct (id: string) {
    return db.delete(temporaryProductTemplates)
           .where(eq(temporaryProductTemplates.id, id))
            .returning();
}

export async function getTempProduct (userId: string) {
    const tempProd =  await db.query.temporaryProductTemplates.findFirst({ where: (temporaryProductTemplates, { eq }) => eq(temporaryProductTemplates.userId, userId)})

    return tempProd
}

export async function createTempProduct (temporaryProduct: Partial<TemporaryProduct>) {
    return await db.insert(temporaryProductTemplates).values(temporaryProduct as TemporaryProduct).returning()
          
}

export async function updateTempProduct(id: string, values: NewTemporaryProduct): Promise<TemporaryProduct[]> {
    const updated = await db.insert(temporaryProductTemplates)
       .values({userId: id, ...values})
        .onConflictDoUpdate({
                target: temporaryProductTemplates.id,
                set: values,
              })
            .returning();
             
    return updated
}




   