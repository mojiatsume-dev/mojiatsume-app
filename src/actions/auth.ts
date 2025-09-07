"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function registerUser(data: FormData) {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return { error: "User with this email already exists." };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return { success: "User registered successfully. Please sign in." };
  } catch (_error) {
    // Rename variable to satisfy the linter
    return { error: "Something went wrong." };
  }
}
