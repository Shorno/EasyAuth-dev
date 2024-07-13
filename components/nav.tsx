"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Avatar,} from "@nextui-org/react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {SiAuthelia} from "react-icons/si";
import {useSession} from "next-auth/react";
import UserAvatar from "@/components/user-avatar";

export default function Nav() {
    const session = useSession();
    const user = session.data?.user;
    const loading = session.status === "loading";

    const currentPath = usePathname();

    return (
        <Navbar>
            <NavbarBrand>
                <Link href={"/"} color={"foreground"} className={"flex gap-2"}>
                    <SiAuthelia size={"30"}/>
                    <p className="font-bold text-inherit">Easy Auth</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href={"/feed"} aria-current="page"
                          className={` ${currentPath === "/feed" ? "font-semibold text-blue-600 hover:text-blue-500" : "hover:text-gray-600"}  transition-colors duration-300 `}>
                        Feed
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={"/dashboard"} aria-current="page"
                          className={` ${currentPath === "/dashboard" ? "font-semibold text-blue-600 hover:text-blue-500" : "hover:text-gray-600"}  transition-colors duration-300 `}>
                        Dashboard
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                {loading ? (
                    <Avatar size={"sm"}/>
                ) : user ? (
                    <UserAvatar username={user.name!} email={user.email!} image={user.image!}/>
                ) : (
                    <>
                        <NavbarItem className="hidden lg:flex">
                            <Link href={"/login"}
                                  className={` ${currentPath === "/login" ? "font-semibold text-blue-600 hover:text-blue-500" : "hover:text-gray-600"}   transition-colors duration-300 `}>
                                Login
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button as={Link} color="primary" href="/sign-up" variant="flat"
                                    className={` ${currentPath === "/sign-up" ? "font-semibold text-blue-600 hover:text-blue-500" : "hover:text-gray-600"}   transition-colors duration-300 `}
                            >
                                Sign Up
                            </Button>
                        </NavbarItem>
                    </>
                )}
            </NavbarContent>
        </Navbar>
    );
}
