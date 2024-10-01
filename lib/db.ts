import { PrismaClient } from '@prisma/client'

declare global {
    let prisma: PrismaClient | undefined
}

export const db = PrismaClient.globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
    PrismaClient.globalThis.prisma = db
}
