import Order from "./Order"

function OrderStatus(props) {
    return (
        <div>
            {props.orders.map((item) => (
                <Order key={item.orderId} orderId={item.orderId} status={item.status} />
            ))}
        </div>

    )
}

export default OrderStatus

// Компонент Статуса Заказа
// В компоненте App определите массив, содержащий информацию о заказах в формате [{orderId: 123, status: ‘в пути’}].
// Создайте компонент OrderStatus который принимает два пропа: orderId (номер заказа) и status (статус заказа, например, "обработан", "в пути", "доставлен").
// Компонент должен отображать информацию в следующем формате: "Заказ #[orderId]: [status]".
// Импортируйте компонент в App, проверьте его работоспособ