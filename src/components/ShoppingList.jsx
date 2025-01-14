function ShoppingList(props) {
    return (
        <div>
            {props.items.length === 0 ? (
                <p>List is empty</p>
            ) : (
                <ul>
                    {props.items.map((item, index) => (
                       <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ShoppingList

// Компонент Списка Покупок
// В компоненте App определите массив, содержащий названия любых товаров.
// Создайте компонент ShoppingList.
// Компонент должен принимать массив с названиями товаров через проп items.
// Также ShoppingList должен отображать каждый элемент из массива в виде <li> элемента <ul> списка.
// Если массив пуст, должно отображаться сообщение: "Список покупок пуст".
// Импортируйте ShoppingList в App, запустите приложение.
// Проверьте, выводится ли сообщение, если список покупок пуст.