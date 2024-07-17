"use client";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/react";
import {DeleteIcon} from "@/components/icons/delete-icon";
import {EditIcon} from "@/components/icons/edit-icon";
import {CopyIcon} from "@/components/icons/copy-icon";
import {deletePost} from "@/actions/delete-post";
import {HiDotsHorizontal} from "react-icons/hi";
import {FaShare} from "react-icons/fa";

export default function PostOptions({postId, postUserId, currentUserId}: {
    postId: string;
    postUserId: string;
    currentUserId: string
}) {
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
                        <HiDotsHorizontal size={15}/>
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="share" startContent={<FaShare/>}>Share post</DropdownItem>
                    <DropdownItem key="copy" startContent={<CopyIcon/>}>Copy link</DropdownItem>
                    {postUserId === currentUserId ? (
                        <DropdownItem key="edit" startContent={<EditIcon/>}>Edit post</DropdownItem>

                    ) : (
                        <DropdownItem key="edit" style={{ display: 'none' }}>
                            <button></button>
                        </DropdownItem>
                    )}


                    {postUserId === currentUserId ? (
                        <DropdownItem key="delete" className="text-danger" color="danger"
                                      startContent={<DeleteIcon/>}
                        >
                            <button onClick={async () => await deletePost(postId)}>Delete post</button>
                        </DropdownItem>
                    ) : (
                        <DropdownItem key="delete" style={{ display: 'none' }}>
                            <button></button>
                        </DropdownItem>
                    )}

                </DropdownMenu>
            </Dropdown>
        </>
    )
}
