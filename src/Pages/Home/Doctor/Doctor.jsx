import {  FaArrowRight, FaRegClock } from "react-icons/fa";
import StarRating from "../../../Components/Rating/StarRating";


const Doctor = ({ doctor }) => {
    const { name, photo, specialties, appointment_time, off_days,rating, experience, cost_per_appointment } = doctor;
    return (
        <div className="card md:card-side bg-base-100 shadow-xl flex-grow-0">
            <figure><img className="md:w-[400px] md:h-[300px]" src={photo} alt="Album" /></figure>
            <p className="absolute  md:bottom-0 bg-slate-200 p-2 rounded-xl m-1">{experience}</p>
            <div className="card-body p-0 pl-4 py-7 ">
                <h2 className="card-title ">{name}</h2>
                <p className=""><span className="font-semibold">Specialties: </span> {specialties.join(", ")}</p>
                <p className="flex items-center gap-3"><span className="font-semibold">Rating:</span> <StarRating rating={rating}></StarRating></p>
                <p className=""><span className="font-semibold">Off days: </span> {off_days.join(", ")}</p>

                <p className="flex items-center gap-3"><FaRegClock></FaRegClock>{appointment_time}</p>
                <p ><span className="font-semibold">Cost:</span> <span className="text-red-500 font-bold">{cost_per_appointment}</span></p>
                
                <div className="card-actions absolute right-0 bottom-0 justify-end m-1">
                    <button className="btn  btn-outline">Schedule <FaArrowRight></FaArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;