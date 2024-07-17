import {Card, CardBody, CardFooter, CardHeader, Divider, Image} from "@nextui-org/react";
import prisma from "@/prisma/db";
import {auth} from "@/auth";
import {Input} from "@nextui-org/input";
import PostOptions from "@/components/dropdown-menu";

export default async function PostList() {

    const session = await auth();
    const currentUserId = session?.user?.id;

    const posts = await prisma.post.findMany({
        include: {
            user: true
        }
    });

    return (
        <>
            {posts.map((post) => (
                <Card className={"max-w-xl mx-auto mb-5"} key={post.id}>
                    <CardHeader className="flex gap-3 justify-between">
                        <div className={"flex gap-3"}>
                            <Image
                                alt="user avatar"
                                height={40}
                                radius="sm"
                                src={post.user.image || undefined}
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">{post.user.name}</p>
                                <p className="text-small text-default-500">{post.createdAt.toDateString()}</p>
                            </div>
                        </div>

                        <PostOptions postId={post.id} currentUserId={currentUserId!} postUserId={post.user.id}/>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p className={"text-xl capitalize"}>{post.title}</p>
                        <p>{post.content}</p>
                    </CardBody>
                    <Divider/>
                    <CardFooter className={"gap-2"}>
                        <Image
                            alt="user avatar"
                            height={30}
                            radius="full"
                            src={session?.user?.image || undefined}
                            width={30}
                        />
                        <Input placeholder={"Write a comment"} className={"w-full"} radius={"lg"} size={"sm"}/>
                    </CardFooter>
                </Card>
            ))}
        </>
    );
}
