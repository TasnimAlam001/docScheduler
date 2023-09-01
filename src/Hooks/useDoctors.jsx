import { useQuery } from "@tanstack/react-query";


const useDoctors = () => {

    const {data: doctors=[] } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/doctors')
            
            return response.json()
        },
    })

    return [doctors];
};

export default useDoctors;