import PostList from "@/components/post-list";
import NewPostForm from "@/components/new-post-form";
import Sidebar from "@/components/sidebar";

export default function Home() {

  return (
      <main className="flex  flex-col items-center justify-between p-20">

          <div className={"flex  flex-col justify-center w-3/4 gap-y-4"}>
              <div>
                  <NewPostForm/>
              </div>
              <div>
                  <PostList/>
              </div>
              <div className={"fixed h-screen top-20 -left-5"}>
                  <Sidebar/>
              </div>
          </div>
      </main>
  );
}
