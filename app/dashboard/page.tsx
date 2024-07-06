import {Card, CardBody} from "@nextui-org/react";
import {auth} from "@/auth";
import UserDetailsCard from "@/components/user-details-card";

export default async function DashboardPage() {
    const session = await auth();
    const user = session?.user;


    return (
        <>
            <div className={"flex flex-col items-center justify-between gap-12 p-24"}>
                <Card>
                    <CardBody>
                        <p>User Auth Status : {user ? <span>Signed in</span> : <span>Not signed in</span>}</p>
                    </CardBody>
                </Card>
                {
                    user && (
                        <UserDetailsCard username={user.name!} email={user.email!} userId={user.id!}/>
                    )
                }

            </div>
        </>
    )
}
