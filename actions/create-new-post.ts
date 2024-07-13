"use server"

import prisma from "@/prisma/db";
import {auth} from "@/auth";
import {revalidatePath} from "next/cache";

export const createPost = async (formData: FormData) => {
    const session = await auth();

    const userId = session?.user?.id

    if (!userId) {
        throw new Error("User ID is undefined. User must be authenticated to create a post.");
    }



    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    if (!title || !content) {
        return;
    }


    await prisma.post.create({


        data: {
            title,
            content,
            published: true,
            userId: userId

        }
    })
    revalidatePath("/feed")


}
