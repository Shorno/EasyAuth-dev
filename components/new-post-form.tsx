import {Button, Card, CardBody, CardHeader, Image} from "@nextui-org/react";
import {createPost} from "@/actions/create-new-post";
import {Input, Textarea} from "@nextui-org/input";
import {auth} from "@/auth";

export default async function NewPostForm() {
    const session = await auth();
    const user = session?.user;

    return (
        <>
            <Card className={"max-w-xl mx-auto"}>
                <CardHeader>
                    <Image
                        alt="user avatar"
                        height={40}
                        radius="full"
                        src={user?.image || undefined}
                        width={40}
                    />
                    <p className="text-lg font-semibold ml-5"> Whats on your mind?</p>
                </CardHeader>
                <CardBody>
                    <form
                        action={createPost}
                        className={"flex flex-col gap-y-4"}>
                        <Input type={"text"} label={"Title"} name={"title"} size={"sm"}/>
                        <Textarea label={"Content"} name={"content"} size={"sm"}/>
                        <Button color={"primary"} type={"submit"}>Post</Button>
                    </form>
                </CardBody>
            </Card>

        </>
    )
}
