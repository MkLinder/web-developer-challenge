import './create-post-box.css'
import ImgIcon from '../../utils/image-icon-48px.png'

export function CreatePostBox() {
    return (
        <div id="post-container">
            <div id="img">
                <img src={ImgIcon} alt="" />
            </div>
            <div id="forms">
                <input id='input-name' type="text" placeholder="Digite seu nome"/>
                <textarea name="" id="msg" placeholder="Mensagem"></textarea>
            </div>
            <div id="buttons">
                <button id="discard">Descartar</button>
                <button id="publish">Publicar</button>
            </div>
        </div>
    )
}