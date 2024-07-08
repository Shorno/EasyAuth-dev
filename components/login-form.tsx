"use client"
import {Card, CardHeader, CardBody, CardFooter, Divider, Button} from "@nextui-org/react";
import {SiAuthelia} from "react-icons/si";
import {AiFillGithub} from "react-icons/ai";
import {signIn} from "next-auth/react";
import {FcGoogle} from "react-icons/fc";


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
                <CardFooter className={"flex flex-col gap-3 justify-center"}>
                    <Button
                        onClick={() => signIn("github", {callbackUrl: "/dashboard"})}
                        color="default"
                        variant="flat"
                    >
                        <AiFillGithub size={20}/>
                        Sign in with <span className={"font-semibold"}>GitHub</span>
                    </Button>
                    <Button
                        onClick={() => signIn("google", {callbackUrl: "/dashboard"})}
                        color="default"
                        variant="flat"
                    >
                        <FcGoogle fill={"blue"} size={20}/>
                        <p>Sign in with <span className={"font-semibold"}>Google</span></p>
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}
