import prisma from '@db/prisma'
import { NextRequest, NextResponse } from 'next/server'
import Argon2 from '../../../../lib/argon2'
import { NewUserSignUpData } from '../../../../types/common'

export const POST = async (req: NextRequest) => {
  const { email, password }: NewUserSignUpData = await req.json()
  try {
    if (!email) return new NextResponse('Missing email', { status: 400 })
    if (!password) return new NextResponse('Missing password', { status: 400 })
    const emailAlreadyRegistered = Boolean(prisma.user.findUnique({ where: { email } }))
    if (emailAlreadyRegistered) return new NextResponse('Email already in use.', { status: 400 })
    const hash = await Argon2.hashPassword(password)
    const newUser = await prisma.user.create({ data: { email, password: hash } })
    return NextResponse.json(newUser)
  } catch (error) {
    const e = error as Error
    console.error(e.message)
    return new NextResponse('Internal Problem', { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  return new NextResponse('Method Not Allowed', { status: 405 })
}

export async function PATCH(request: NextRequest) {
  return new NextResponse('Method Not Allowed', { status: 405 })
}

export async function GET(request: NextRequest) {
  return new NextResponse('Method Not Allowed', { status: 405 })
}

export async function HEAD(request: NextRequest) {
  return new NextResponse('Method Not Allowed', { status: 405 })
}

export async function PUT(request: NextRequest) {
  return new NextResponse('Method Not Allowed', { status: 405 })
}
