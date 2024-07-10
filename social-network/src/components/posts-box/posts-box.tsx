import './posts-box.css';
import { PostCard } from "../post-card/post-card";


export function PostsBox() {
    return (
        <main>
            <h5 id='feed'>Feed</h5>
            <PostCard 
                urlImage="https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg" 
                msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consequuntur id est! Enim amet dolorum velit! Consequuntur pariatur commodi aspernatur unde, dolorem officiis quis minima, suscipit quod, quae autem error!"
                userName="Mike Linder"
            />
            <PostCard 
                urlImage="https://images.ecycle.com.br/wp-content/uploads/2021/05/03122127/pietro-de-grandi-T7K4aEPoGGk-unsplash-1024x683.jpg.webp"
                msg="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quisquam veniam consequatur, quaerat ipsam numquam sapiente quam nesciunt perspiciatis magni provident tempora distinctio nihil excepturi expedita harum! Ad, harum nisi."
                userName="Bruna Veigas"
            />
            <PostCard 
                urlImage="https://img.freepik.com/fotos-gratis/um-por-do-sol-sobre-uma-praia-com-um-por-do-sol-dourado-ao-fundo_188544-33419.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=sph"
                msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem porro velit harum. Quas totam est repellat maiores, dolore in cupiditate ad sint."
                userName="Júlia M. Soares"
            />
        </main>
    )
}