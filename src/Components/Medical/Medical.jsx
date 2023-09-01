

const Medical = ({ hospital }) => {

    const { name, image, about, rating, place } = hospital;


    return (
        <div className="hero w-[400px] h-[250px] rounded" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="hero-overlay max-w-md  bg-opacity-40 p-8 px-10">
                    <h1 className="mb-5 text-xl font-bold uppercase ">{name}</h1>
                    <p className="mb-5">{about}</p>
                    <div className="flex justify-between pt-2">
                        <p>Rating: {rating}</p>
                        <p>Place: {place}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Medical;