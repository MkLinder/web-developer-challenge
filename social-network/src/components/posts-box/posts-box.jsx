import './posts-box.css'

export function PostsBox({children}) {
    return (
        <main>
            <h5>Feed</h5>
            { children }
        </main>
    )
}