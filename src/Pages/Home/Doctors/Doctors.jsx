import { useLoaderData } from "react-router-dom";
import Doctor from "../Doctor/Doctor";
import useDoctors from "../../../Hooks/useDoctors";
import Location from "../../../Components/Location/Location";
import StarRating from "../../../Components/Rating/StarRating";



const Doctors = () => {

    const [doctors] = useDoctors();
    // const { id } = useParams();
    const hospital = useLoaderData();
    const { name, image, about, rating, place } = hospital;

    const hospitalDoctors = doctors?.filter(doctor => doctor.hospital === hospital.name);
    console.log(hospitalDoctors)

    return (
        <div className="mt-24 p-8">
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{about}</p>
                    <div className="flex justify-between pt-8">
                        <p className="flex justify-center">Rating: <span className=""><StarRating></StarRating> </span> ({rating})</p>
                        <p className="flex justify-center"><Location></Location>  : {place}</p>
                    </div>
                </div>
            </div>

            <div className="divider my-10 font-bold mt-20">Doctors Under This Hospital</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-16 ">
                {
                    hospitalDoctors.map((doctor) => (

                        <Doctor key={doctor._id} doctor={doctor}></Doctor>
                    ))
                }
            </div>
        </div>
    );
};

export default Doctors;