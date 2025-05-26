
function Food() {

    const food1 = "Pizza";
    const food2 = "Pasta";
    const food3 = "Noodles";

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toLowerCase()}</li>
            <li>{food3.toUpperCase()}</li>
        </ul>
    );
}

export default Food