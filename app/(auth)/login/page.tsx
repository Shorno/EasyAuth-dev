import LoginForm from "@/components/login-form";

export default function LoginPage(){
    return (
        <>
            <div className="flex flex-col items-center justify-between p-24 gap-12">
                <h1 className={"text-4xl"}>Login Page</h1>
                <LoginForm/>
            </div>
        </>
    )
}
