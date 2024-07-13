import {auth} from "@/auth";
import {Card, CardHeader, Image} from "@nextui-org/react";
import Link from "next/link";

export default  async function Sidebar(){
    const session = await auth();
    const user  = session?.user;

    return (
        <>
            <Card className={"h-1/2 mx-auto mb-5"}>
                <Link href={`user/${user?.id}`} className={"hover:bg-gray-200"}>
                    <CardHeader className="flex gap-3 p-4 ml-5">
                        <Image
                            alt="user avatar"
                            height={30}
                            radius="sm"
                            src={session?.user?.image || undefined}
                            width={30}
                        />
                        <div className="flex flex-col">
                            <p className={"text-sm"}>{user?.name}</p>
                        </div>
                    </CardHeader>
                </Link>
            </Card>
        </>
    )
}
