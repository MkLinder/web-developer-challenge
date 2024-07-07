import './create-post-box.css'
import ImgIcon from '../../utils/image-icon-48px.png'

export function CreatePostBox() {
    return (
        <section id="post-container">
            <span id="img">

                <input type="image" src={ImgIcon} alt="Adicione uma imagem" />
            </span>
            <form id="forms">
                <input id='input-name' type="text" placeholder="Digite seu nome"/>
                <textarea name="" id="msg" placeholder="Mensagem"></textarea>
            </form>
            <div id="buttons">
                <button id="discard">Descartar</button>
                <button id="publish">Publicar</button>
            </div>
        </section>
    )
}