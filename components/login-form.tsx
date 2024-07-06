"use client"
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Input, Button} from "@nextui-org/react";
import {SiAuthelia} from "react-icons/si";
import {AiFillGithub} from "react-icons/ai";
import {signIn} from "next-auth/react";


export default function LoginForm() {
    return (
        <>
            <Card className="max-w-[400px]">
                <CardHeader className="flex justify-center gap-3">
                    <SiAuthelia size={"35"}/>
                    <div className="flex flex-col">
                        <p className="text-lg font-bold">Welcome</p>
                    </div>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <div className="flex flex-col">
                        <p className="text-md">Email sign in option will be available soon.</p>
                    </div>
                </CardBody>
                <Divider/>
                <CardFooter className={"flex justify-center"}>
                    <Button
                        onClick={() => signIn("github", {callbackUrl: "/dashboard"})}
                        color="default"
                        variant="flat"
                    >
                        <AiFillGithub size={20}/>
                        Sign in with GitHub
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}
