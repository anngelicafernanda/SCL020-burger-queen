import React from "react";
import addSign from "../../imagesApp/signomas.png";
import lessSign from "../../imagesApp/menos.png";
import "./Breakfast.css";

const Breakfast = ({ currentMenu, setTablesInfo, tableId, order }) => {
  // setTablesInfo
  const addFoodToOrder = (foodValue) => {
    setTablesInfo((prev) =>
      prev.map((table) => {
        if (table.id === tableId) {
          return {
            ...table,
            order: [
              ...table.order,
              {
                ...foodValue,
                amount: table.order.find((food) => food.name === foodValue.name)
                  ? table.order.find((food) => food.name === foodValue.name)
                      ?.amount + 1
                  : 1,
              },
            ],
          };
        }

        return table;
      })
    );
  };

  /* {
      nombre
    } 
  */

  return (
    <>
      {currentMenu.map((currentValue) => (
        <div key={currentValue.name} className="containerOrderBreakfast">
          <p>{currentValue.name}</p>
          <p>{currentValue.price}</p>
          <div className="containerSigns">
            <img
              className="lessSign"
              src={lessSign}
              alt="lessSign"
              // onClick={() => orderChanger(currentValue.name)}
            />
            <p>
              {order.find((food) => food.name === currentValue.name)?.amount ??
                0}
            </p>
            <img
              className="addSign"
              src={addSign}
              alt="addSign"
              onClick={() => addFoodToOrder(currentValue)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Breakfast;
