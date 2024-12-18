function Order (props) {
    return (
        <>
            <p>Order: #{props.orderId}: Status: {props.status}</p>
        </>
    )
}

export default Order