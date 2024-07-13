import {Card, CardBody, CardFooter, CardHeader, Divider, Image} from "@nextui-org/react";
import {auth} from "@/auth";
import {Input} from "@nextui-org/input";
import prisma from "@/prisma/db";
import PostOptions from "@/components/dropdown-menu";

export default async function ProfilePage() {
    const session = await auth();
    const user = session?.user;

    const posts = await prisma.post.findMany({
        where: {
            userId: user?.id
        }
    })

    return (
        <>

            <Card className={"w-1/2 mx-auto mt-24 mb-20"}>
                <CardHeader className={"flex justify-center"}>
                    <h1 className="bg-gradient-to-r  text-5xl font-bold  from-blue-600 via-green-500 to-indigo-400  inline-block text-transparent bg-clip-text">
                        User Profile
                    </h1>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <div className={"flex gap-4 justify-between text-lg text-gray-400"}>
                        <p>Name: {user?.name}</p>
                        <p>Email: {user?.email}</p>
                        <p>UserId: {user?.id}</p>
                    </div>
                </CardBody>
            </Card>
            {posts.map((post) => (
                <Card className={"w-1/4 mx-auto mb-5"} key={post.id}>
                    <CardHeader className="flex justify-between gap-3">
                        <div className={"flex gap-3"}>
                            <Image
                                alt="user avatar"
                                height={40}
                                radius="sm"
                                src={user?.image || undefined}
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">{user?.name}</p>
                                <p className="text-small text-default-500">{post.createdAt.toDateString()}</p>
                            </div>
                        </div>
                        {/*<form action={async () => {*/}
                        {/*    "use server"*/}
                        {/*    await deletePost(post.id)*/}
                        {/*}}>*/}
                        {/*    <button className={"text-red-300"} type={"submit"}>Delete</button>*/}
                        {/*</form>*/}
                        <PostOptions postId={post?.id}/>
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
    )
}
