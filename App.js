function App () {
    return (
        <div>
            <Person
                name="Jane"
                age={28}
                hobbies={['running', 'sky diving', 'singing']}
            />
            <Person
                name="John"
                age={31}
                hobbies={['walking', 'biking', 'swimming']}
            />
            <Person
                name="Joe"
                age={24}
                hobbies={['drawing', 'painting', 'reading']}
            />
            <Person
            name="Jill"
            age={32}
            hobbies={['coding', 'reading', 'writing']}
            />
        </div>
    );
}