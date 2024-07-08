import './post-card.css';
import closeButton from '../../utils/close-icon-48px.png';

export function PostCard({urlImage, msg, userName}:any) {
    return (
        <section id="card-container">
            <div id="close-button">
                <a href="#">
                    <img src={ closeButton } alt="" width="20px"/>
                </a>
            </div>
            <article id='card-contain'>
                <div id='img-card'>
                    <img src={ urlImage } alt="Post image" />
                </div>
                <section id='contain'>
                    <h6 id='msg-contain'>{ msg }</h6>

                    <div>
                        <p id='ref-name'>Enviado por</p>
                        <p id="name">{ userName }</p>
                    </div>
                </section>
            </article>
        </section>
    )
}