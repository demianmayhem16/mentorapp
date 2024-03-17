import { db } from '@/lib/db'
import { NewUser, User, users } from '@/lib/schema'
import { eq } from 'drizzle-orm'

// const result: User[] = await db.select().from(users);

export async function createUser(user: NewUser): Promise<User[]> {
    return db.insert(users).values(user).returning()
}

export async function getUser(email: string) {
    return await db.query.users.findFirst({ with: email })
}

export async function getUsers() {
    return await db.query.users.findMany()
}

export async function updateUser(user: NewUser, existingId: string): Promise<User[]> {
    const { email, name } = user
    const updatedUser = await db
        .update(users)
        .set({ name, email })
        .where(eq(users.id, existingId))
        .returning()

    return updatedUser
}
