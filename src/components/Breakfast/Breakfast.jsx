import "./Breakfast.css";
import addSign from "../../imagesApp/signomas.png";
import lessSign from "../../imagesApp/menos.png";

const Breakfast = ({ currentMenu }) => {
    console.log(currentMenu)

    return (
        <div className="containerOrderBreakfast">
            <p>Pedido</p>
            <p>Precio</p>
            <p>Cant</p>
            <p>Arepa asada rellena con queso llanero</p>
            <p>$5000</p>
            <div className="containerSigns">
                <img
                    className="lessSign"
                    src={lessSign}
                    alt="lessSign"
                />
                <p>1</p>
                <img
                    className="addSign"
                    src={addSign}
                    alt="addSign"
                />
            </div>
            <p>Pelua: Arepa asada rellena con carne mechada y queso amarillo</p>
            <p>$5000</p>
            <p>1</p>
        </div >
    );
};

export default Breakfast;
