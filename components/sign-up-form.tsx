"use client"

import {Button, Card, CardBody, CardFooter, CardHeader, Divider} from "@nextui-org/react";
import Link from "next/link";
import {Input} from "@nextui-org/input";

export default function SignUpForm() {


    return (
        <>
            <Card className="max-w-[400px]">
                <CardHeader className="flex justify-center gap-3">
                    <div className="flex flex-col">
                        <p className="text-lg font-bold">Welcome to Easy Auth 👋</p>
                    </div>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <form>
                        <div className="flex flex-col gap-4">
                            <Input name={"email"} id={"email"} type={"email"} placeholder={"Enter your email"}
                                   label={"Email"}/>
                            <Input name={"username"} id={"username"} type={"text"} placeholder={"Enter your username"}
                                   label={"Username"}/>
                            <Input name={"password"} id={"password"} type={"password"}
                                   placeholder={"Enter your password"} label={"Password"}/>

                        </div>
                        <Button color={"primary"} className={"mt-3 w-full"}>Sign Up</Button>
                    </form>
                </CardBody>
                <Divider/>
                <CardFooter className={"flex gap-3 justify-center"}>

                    <p>Already have an account?</p><Link href={"/login"}
                                                         className={"text-blue-700 font-semibold underline"}>Login</Link>

                </CardFooter>
            </Card>
        </>
    )
}
