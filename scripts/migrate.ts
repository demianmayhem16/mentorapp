import { migrate } from 'drizzle-orm/vercel-postgres/migrator'
import { db } from '../lib/db'

async function main() {
    console.log('migration started')
    await migrate(db, { migrationsFolder: './drizzle' })
    console.log('migration ended')
    process.exit(0)
}

main().catch((err) => {
    console.log(err, 'migration error')
    process.exit(1)
})
