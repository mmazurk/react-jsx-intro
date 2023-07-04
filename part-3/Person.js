function Person({name, age, hobbies}) {

    if(name.length > 8) name = name.slice(0,8)

    return(
        <div>
            <p>Learn some information about this person: 
                <ul>
                    <li>Name: {name}</li>
                    <li>Age: {age}</li>
                    {hobbies.map(item => (
                        <li>Hobby: {item}</li>
                    ))}
                </ul>
            </p>
            <h3>{age > 18 ? "please go vote!" : "you must be 18 to vote!"}</h3>
       
        </div>
    )
}