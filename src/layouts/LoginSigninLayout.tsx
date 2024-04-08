import Logo from "@/app/ui/Header/Logo"
import Link from "next/link"
import { Fragment, ReactNode } from "react"

const LoginSigninLayout = (children: ReactNode) => {
    return(
        <>
        <Link href="/"> 
            <Logo/>
        </Link>
        <Fragment>{children}</Fragment>
        
       </>
    )
}

export default LoginSigninLayout;