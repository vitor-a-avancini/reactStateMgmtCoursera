import { useFruitsListContext } from "./Fruits";

const FruitsList = () => {
    const { fruits } = useFruitsListContext();

    return (
        <>
            <h1>Fruit List</h1>
            {fruits.map((fruit, index) => (
                <h2 key={index}>{fruit}</h2>
            ))}
        </>    
    )
}

export default FruitsList;