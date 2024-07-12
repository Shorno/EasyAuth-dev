import NewPostForm from "@/components/new-post-form";
import PostList from "@/components/post-list";

export default function PostPage() {
    return (
        <>

            <div className={"flex pt-24"}>
                <div className={"justify-center w-3/4"}>
                    <PostList/>
                </div>
                <div className={"flex-1 sticky mx-auto  mr-10"}>
                    <NewPostForm/>
                </div>
            </div>
        </>
    )
}
