"use server"

import {revalidatePath} from "next/cache";
import prisma from "@/prisma/db";
import {auth} from "@/auth";

export async function deletePost(postId : string) {
    const session = await auth();

    const userId = session?.user?.id;

    if (!userId) {
        throw new Error("User ID is undefined. User must be authenticated to delete a post.");
    }

    // await prisma.post.delete({
    //     where: {
    //         id: postId
    //     }
    // })
    try {
        await prisma.post.delete({
            where: {
                id: postId,
            },
        });
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }

    revalidatePath("/feed")
}