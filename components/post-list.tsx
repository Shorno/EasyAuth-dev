import {Card, CardBody, CardFooter, CardHeader, Divider, Image} from "@nextui-org/react";
import prisma from "@/prisma/db";

export default async function PostList() {
    const posts = await prisma.post.findMany({
        include : {
            user: true
        }
    });

    return (
        <>
            {posts.map((post) => (
                <Card className={"max-w-xl mx-auto mb-5"} key={post.id}>
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="user avatar"
                            height={40}
                            radius="sm"
                            src={post.user.image || undefined}
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">{post.user.name}</p>
                            <p className="text-small text-default-500">{post.user.email}</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p className={"text-xl capitalize"}>{post.title}</p>
                        <p>{post.content}</p>
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        {post.createdAt.toDateString()}
                    </CardFooter>
                </Card>
            ))}
        </>
    );
}
