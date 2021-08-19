import "../../styles/portafolioList.scss";


export default function PortafolioList({title,setSelected,active,id}) {
    return (
        <li className={active?"portafolioList active":"portafolioList"}onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}
