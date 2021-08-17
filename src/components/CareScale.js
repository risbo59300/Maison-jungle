import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg'

// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui
// retourne l'élément souhaité, ou bien faire directement des conditions

const quantityLabel = {
    1: 'peu',
    2: 'moderement',
    3: 'beaucoup'
}

function CareScale({ scaleValue, careType }) {

    const range = [1, 2, 3];

    const scaleType = careType === 'light' ? 
    (<img src = {Sun} alt = 'sun-icon' />) 
    //'☀️'
    :
    //'💧'
    (<img src = {Water} alt = 'water-icon' />)
    

    return (
        <div>
            <button onClick = {() =>
            alert(
                `Cette plante requiert ${quantityLabel[scaleValue]}
                ${careType === 'light' ? 'de lumière' : "d'arrosage"}`
            ) 
            }
            >
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (<span key = {rangeElem.toString()}>
                {scaleType}</span>) : null)} 
            
                
            </button>
        </div>
    );
}

export default CareScale;