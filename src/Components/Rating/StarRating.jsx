import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const StarRating = ({rating}) => {
    return (
        <div className='inline-block'>
            <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
            />

        </div>
    );
};

export default StarRating;