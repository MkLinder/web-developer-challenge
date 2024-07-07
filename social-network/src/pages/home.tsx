import { CreatePostBox } from "../components/create-post-box/create-post-box";
import { Footer } from "../components/footer/footer";
import { NavMenu } from "../components/nav-menu/nav-menu";
import { PostCard } from "../components/post-card/post-card";

export function Home() {
    return(
        <>
            <NavMenu/>
            <CreatePostBox/>
            <PostCard/>
            <Footer/>
        </>
    )
}