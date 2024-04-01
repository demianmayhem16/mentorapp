export enum ERoles {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export type TSessionUser = {
    name?: string | null | undefined,
    email?: string | null | undefined,
    image?: string | null | undefined
}
