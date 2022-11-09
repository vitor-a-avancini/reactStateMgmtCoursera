import React from "react";

const FruitsContext = React.createContext();

const fruitsCurrent = ['apple','apple','plum','orange','tomato'];

const FruitsProvider = ({ children }) => {
    const [fruits, setFruitList] = React.useState(fruitsCurrent)

    return <FruitsContext.Provider value={{ fruits }} >
        {children}
        </FruitsContext.Provider>
}

export const useFruitsListContext = () => React.useContext(FruitsContext);

export default FruitsProvider;