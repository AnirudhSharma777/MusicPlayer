import axios from "axios";
import { createContext, useCallback, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [song, setSong] = useState([])
    

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://cms.samespace.com/items/songs");
            const result = response.data.data;
            setData(result);
            // const songList = result.map((ele) => ({
            //     name: ele.name || '',
            //     artist: ele.artist || '',
            //     album: ele.album || '',
            //     duration: ele.duration || '',
            //     image: `https://cms.samespace.com/assets/${ele.cover}` || ''
            // }));

            // setSong(songList);

            

        } catch (e) {
            console.log(e);
            setData([]);
            // setSong([]);
        }
        finally {
            setLoading(false);
        }
    }, [setData])


    const Value = {
        data,
        setData,
        loading,
        setLoading,
        fetchData,
    }
    return (
        <DataContext.Provider value={Value}>
            {children}
        </DataContext.Provider>
    )
}