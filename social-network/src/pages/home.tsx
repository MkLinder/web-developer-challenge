import { CreatePostBox } from "../components/create-post-box/create-post-box";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { PostCard } from "../components/post-card/post-card";

export function Home() {
    return(
        <>
            <Header/>
            <CreatePostBox/>
            <PostCard/>
            <Footer/>
        </>
    )
}