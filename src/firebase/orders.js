import { addDoc, getDocs, query, collection } from 'firebase/firestore'
import { db } from './firebaseInit'

/*
  En este archivo se exponen los metodos para el manejo de la persistencia del recurso ORDER
*/


// Consultar ORDERS
const getAllOrders = async () => {
  try {
    const orders = []

    const ordersQuery = query(collection(db, "orders"))
    const ordersSnapshot = await getDocs(ordersQuery)
  
    ordersSnapshot.forEach((orderDoc) => {
      orders.push(orderDoc.data())
    })
  
    console.log('Ordenes obtenidas exitosamente!')

    console.log(orders)
    return orders

  } catch (err) {
    console.log(err)
  }
}


// available | orderSent | preparing | ready | eating

// Crear ORDER
/*
  {
    tableId: 1
    orderDetail: [
      {
        name: Arepas,
        price: 1200,
        amount: 2
      }
    ],

    status: 'orderSent'
  }
*/

const createOrder = async (orderDetail, tableId) => {
  try {
    const orderDocRef = await addDoc(
      collection(db, "orders"), 
      
      {
        tableId,
        orderDetail,
        status: 'orderSent'
      }
    )

    console.log(orderDocRef)
    console.log('TODO BIEN!!!!')

  } catch(err) {
    console.log(err)
  }
}

// Actualizar ORDER

export { createOrder, getAllOrders }