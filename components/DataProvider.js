import React, { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [taskItems, setTaskItems] = useState([]);
    console.log(taskItems)
    

    return (
        <DataContext.Provider value={ [taskItems, setTaskItems] } >
            {props.children}
        </DataContext.Provider>
    )
}