export async function getSession() {
    const session = await fetch('http://localhost:3000/api/auth/session')
    return { session }
}
