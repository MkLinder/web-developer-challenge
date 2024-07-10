import './create-post-box.css'
import ImgIcon from '../../utils/image-icon-48px.png'


// Terminar de configurar ícone clicável para selecionar imagem (id= inputEvent)
export function CreatePostBox() {
    return (
        <section id="post-container">
            <div id="img">
                <input type="image" id='imgInput' src={ImgIcon} alt="Adicione uma imagem"/>
                {/*<input type="file" name="image" id="inputEvent"/>*/}
            </div>
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