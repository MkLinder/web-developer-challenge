import { CreatePostBox } from "../components/create-post-box/create-post-box";
import { NavMenu } from "../components/nav-menu/nav-menu";

export function Home() {
    return(
        <>
            <NavMenu/>
            <CreatePostBox/>
        </>
    )
}