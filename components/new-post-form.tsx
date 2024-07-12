import {Button, Card, CardBody} from "@nextui-org/react";
import {createPost} from "@/actions/create-new-post";
import {Input, Textarea} from "@nextui-org/input";

export default function NewPostForm() {
    return (
        <>
            <Card>
                <CardBody>
                    <form
                        action={createPost}
                        className={"flex flex-col gap-y-4"}>
                        <Input type={"text"} label={"Title"} name={"title"}/>
                        <Textarea label={"Content"} name={"content"}/>
                        <Button color={"primary"} type={"submit"}>Add new post</Button>
                    </form>
                </CardBody>
            </Card>

        </>
    )
}
