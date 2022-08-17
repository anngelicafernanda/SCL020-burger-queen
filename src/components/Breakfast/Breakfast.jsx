import React, { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import "./Breakfast.css";

const Breakfast = ({ currentMenu, tableId, order }) => {
  const { setTablesInfo, tablesInfo } = useContext(AppContext);
  // setTablesInfo
  const addFoodToOrder = (foodValue) => {
    const newTablesInfo = tablesInfo.map((table) => table);
    const table = newTablesInfo.find(
      (currentTable) => currentTable.id === tableId
    );
    const isFoodInOrder = table.order.find(
      (food) => food.name === foodValue.name
    );
    if (isFoodInOrder) {
      isFoodInOrder.amount += 1;
    } else {
      foodValue.amount = 1;
      table.order.push(foodValue);
    }
    setTablesInfo(newTablesInfo);
  };
  const lessFoodToOrder = (foodValue) => {
    const newTablesInfo = tablesInfo.map((table) => table);
    const table = newTablesInfo.find(
      (currentTable) => currentTable.id === tableId
    );
    const isFoodInOrder = table.order.find(
      (food) => food.name === foodValue.name
    );
    if (isFoodInOrder) {
      isFoodInOrder.amount -= 1;
      if (isFoodInOrder.amount === 0) {
        const index = table.order.indexOf(isFoodInOrder);
        table.order.splice(index, 1);
      }
    }
    setTablesInfo(newTablesInfo);
  };

  return (
    <>
      {currentMenu.map((currentValue) => (
        <div key={currentValue.name} className="containerOrderBreakfast">
          <p>{currentValue.name}</p>
          <p>{currentValue.price}</p>
          <div className="containerSigns">
            <button
              className="lessSign"
              onClick={() => lessFoodToOrder(currentValue)}
              disabled={
                !tablesInfo
                  .find((currentTable) => currentTable.id === tableId)
                  .order.find(
                    (currentFood) => currentFood.name === currentValue.name
                  )
              }
            >
              –
            </button>
            <p>
              {order.find((food) => food.name === currentValue.name)?.amount ??
                0}
            </p>
            <button
              className="addSign"
              onClick={() => addFoodToOrder(currentValue)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Breakfast;

function palindrome(str) {
  const len = Math.floor(str.length / 2);
  for (let i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false; 
  return true;
}
