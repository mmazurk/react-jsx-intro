function MarkProps(props) {
    return (
        <div>
            <h1>Time for some props</h1>
            <ul>
                <li>First Name: {props.firstName}</li>
                <li>Last Name: {props.lastName}</li>
                <li>Status: {props.status ? 'true' : 'false' }</li>
            </ul>
        </div>
    )
}