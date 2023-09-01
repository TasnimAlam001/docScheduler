import { useEffect, useState } from "react";


const useHospitals = () => {

    const [hospitals, setHospital] = useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(  () => {
         fetch('http://localhost:5000/hospitals')
            .then(res => res.json())
            .then(data => {setHospital(data)})
            setLoading(false);
    }, [])


    return [hospitals,loading]
};

export default useHospitals;