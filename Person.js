const MaxNameLengthToShow = 6;

function Person ({age, hobbies, name}) {
    const voteText = age >= 18 ? 'Please go vote!' : 'You must be 18';
    const hobbiesList = hobbies.map(hobby => <li>{hobby}</li>);
    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {name.slice(0, MaxNameLengthToShow)}</li>
                <li>Age: {age}</li>
            <ul>
            Hobbies:
            {hobbiesList}
            </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}