import { PrismaClient } from '@prisma/client'

const getNewPrismaCLient = () => {
  return new PrismaClient()
}

type PrismaClientType = ReturnType<typeof getNewPrismaCLient>

const prisma = getNewPrismaCLient()

export default prisma
