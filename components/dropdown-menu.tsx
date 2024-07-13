"use client";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/react";
import {DeleteIcon} from "@/components/icons/delete-icon";
import {EditIcon} from "@/components/icons/edit-icon";
import {CopyIcon} from "@/components/icons/copy-icon";

export default function PostOptions() {
    return (
        <>
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        className={"flex items-center justify-center"}
                        size={"sm"}
                        radius={"full"}
                        variant="light"
                        isIconOnly
                    >
                        <span className={"font-bold"}>⋮</span>
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="copy" startContent={<CopyIcon/>}>Copy link</DropdownItem>
                    <DropdownItem key="edit" startContent={<EditIcon/>}>Edit post</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger"
                                  startContent={<DeleteIcon/>}
                    >
                        Delete post
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    )
}
