"use client"
import {Button, Card, CardBody, CardFooter, CardHeader, Divider} from "@nextui-org/react";
import {signOut} from "next-auth/react";

export default function UserDetailsCard({username, userId, email}: {
    username: string,
    userId: string,
    email: string
}) {

    return (
        <>
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-md">{username}</p>
                        <p className="text-small text-default-500">{email}</p>
                    </div>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <p>{userId}</p>
                </CardBody>
                <Divider/>
                <CardFooter>
                    <Button
                        onClick={() => signOut({callbackUrl: "/"})}
                    >
                        Sign Out
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}
