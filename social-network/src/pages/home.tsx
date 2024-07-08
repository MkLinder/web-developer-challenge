import { CreatePostBox } from "../components/create-post-box/create-post-box";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { PostsBox } from "../components/posts-box/posts-box";

export function Home() {
    return(
        <>
            <Header/>
            <CreatePostBox/>
            <PostsBox/>
            <Footer/>
        </>
    )
}