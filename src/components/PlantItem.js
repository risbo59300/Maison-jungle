
import CareScale from "./CareScale";
import '../styles/PlantItem.css'

function handleClick(plantName) {
    console.log('✨ Ceci est un clic ✨')
    alert(`vous voulez acheter 1 ${plantName} ? Très bon choix 🌱 ✨`)
}

function PlantItem(props) {
    
    return (
        <li key = {props.id} className = 'lmj-plant-item' onClick = {() => handleClick(props.name)}>
            <img className = 'lmj-plant-item-cover' src = {props.cover} alt = {`${props.name}`} />
            {props.name}
            <div>
                <CareScale careType = 'water' scaleValue = {props.water} />
                <CareScale careType = 'light' scaleValue = {props.light} />
            </div>
        </li>
    );
}




export default PlantItem;

