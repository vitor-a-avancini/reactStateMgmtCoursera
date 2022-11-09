import { useFruitsListContext } from "./Fruits";

const Counter = () => {
    const { fruits } = useFruitsListContext();

    return (
        <>
            <h3>Number of Fruits: {fruits.length}</h3>
        </>
    );
}

export default Counter;