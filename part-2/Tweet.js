function Tweet(props) {

    const textStyle = {
        color: 'brown',
        fontWeight: 'bold'
     };

    return (
        <div>
            <ul>
                <li>Username: {props.username}</li>
                <li>Name: {props.name}</li>
                <li>Date: {props.date}</li>
                <li>Tweet: <span style={textStyle}>{props.message}</span></li>
            </ul>
        </div>
    )
}