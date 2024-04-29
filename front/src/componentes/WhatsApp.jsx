import logo from "../logos/whatsapp.svg";
import style from "./whatsapp.module.css";


export default function WhatsApp (){
    return(
        <div className = {style.container}>
        <a href='https://api.whatsapp.com/send?phone=111555663291' target="_blank">
            <img src={logo} alt="" />
        </a>
        </div>
    )
}
