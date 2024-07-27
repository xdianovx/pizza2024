import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const data = req.json();

  const user = await prisma.user.create({
    data: {
      ...data,
    },
  });

  return NextResponse.json(data);

export async function POST(request: NextRequest) {
  const requestBody = await request.json();
  const createdUser = await createUser(requestBody);

  return NextResponse.json(createdUser);
}
