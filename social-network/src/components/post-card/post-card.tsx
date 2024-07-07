import { PostsBox } from '../posts-box/posts-box';
import './post-card.css';
import closeButton from '../../utils/close-icon-48px.png';

export function PostCard() {
    return (
        <PostsBox>
            <section id="card-container">
                <div id="close-button">
                    <a href="#">
                        <img src={ closeButton } alt="" width="20px"/>
                    </a>
                </div>
                <article id='card-contain'>
                    <div id='img-card'></div>
                    <section id='contain'>
                        <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus cumque repellendus, id laborum dicta accusantium ratione! Eaque non omnis quis corporis id dolores atque molestias ad! Molestiae voluptatum ab aliquam.</h6>

                        <div>
                            <p id='ref-name'>Enviado por</p>
                            <p id="name">Mike Linder</p>
                        </div>
                    </section>
                </article>
            </section>
        </PostsBox>
    )
}