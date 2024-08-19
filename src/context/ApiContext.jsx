import axios from "axios";
import { createContext, useCallback, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [bgColor, setBgColor] = useState([]);
    const [timeOutError, setTimeOutError] = useState(false);
    
    

    const fetchData = useCallback(async () => {
        setLoading(true);
    
        try {
            const response = await axios.get("https://cms.samespace.com/items/songs");
            const result = response.data.data;
            setData(result);          

        } catch (e) {
            console.log(e);
            setData([]);
        }
        finally {
            setTimeout(() => {
                setLoading(false);
            },3000);
        }
    }, [setData])


    const Value = {
        data,
        setData,
        loading,
        setLoading,
        fetchData,
        bgColor,
        setBgColor
    }
    return (
        <DataContext.Provider value={Value}>
            {children}
        </DataContext.Provider>
    )
}