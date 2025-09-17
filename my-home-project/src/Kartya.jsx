import Elso from './assets/Elso.jpg';
import Masodik from './assets/Masodik.jpg';
import Harmadik from './assets/Harmadik.jpg';
function Kartya() {
    return(
        <div className="kartya">
            <img src={Elso} alt="Szoboszlai Dominik" />
            <h2>Szoboszlai Dominik</h2>
            <br />
            <img src={Masodik} alt="Varga Barnabás" />
            <h2>Varga Barnabás</h2>
            <br />
            <img src={Harmadik} alt="Palvin Barbara"/>
            <h2>Palvin Barbara</h2>
        </div>
    )
}
export default Kartya