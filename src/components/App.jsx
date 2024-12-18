import Greeting from "./Greeting";
import ShoppingList from "./ShoppingList";
import OrderStatus from './OrderStatus';

function App() {
  const items = ["Milk", "Bread", "Apples"];

  const orders = [
    { orderId: 123, status: 'in transit' },
    { orderId: 456, status: 'processed' },
    { orderId: 789, status: 'delivered' }
  ];

  return (
    <>
      <Greeting name="User" />
      <h3>Shopping list</h3>
      <ShoppingList items={items} />
      <h3>Order statuses</h3>
      <OrderStatus orders={orders}/>
    </>
  )
}

export default App
