import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import prisma from "@/prisma/db";
import {PrismaAdapter} from "@auth/prisma-adapter";
import Google from "@auth/core/providers/google";

export const {handlers, auth, signIn, signOut} = NextAuth({
    trustHost: true,
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHub({
                clientId: process.env.AUTH_GITHUB_ID,
                clientSecret: process.env.AUTH_GITHUB_SECRET,
            }
        ),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),

    ],

})
