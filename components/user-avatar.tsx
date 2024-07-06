import {Avatar, Divider, Link, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {signOut} from "next-auth/react";

export default function UserAvatar({username, email, image}: { username: string, email: string, image: string }) {
    return (
        <>
            <Popover placement="bottom" showArrow={true}>
                <PopoverTrigger>
                    <Avatar src={image} size="sm"/>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="flex flex-col gap-2 mb-2">
                        <p className="text-md">{username}</p>
                        <p className="text-small text-default-500">{email}</p>
                    </div>
                    <Divider/>
                    <button
                        onClick={() => signOut({callbackUrl: "/dashboard"})}
                        className={"text-medium text-blue-700"}
                    >
                        Sign out
                    </button>
                </PopoverContent>

            </Popover>
        </>
    )
}
