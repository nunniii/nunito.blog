import Link from "next/link";

export function Nav(){

    return(
        <nav className="nav {props.theClass}">
            <li><Link href="/" >../</Link></li>
        </nav>
    )
}


