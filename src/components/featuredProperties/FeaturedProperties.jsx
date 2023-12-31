import useFetch from '../../hooks/useFetch'
import './featuredProperties.css'

const FeaturedProperties = () => {
    const {data, loading, error} = useFetch("https://hotelbookingbackend-9dzf.onrender.com/api/hotels?featured=true&limit=4")
    console.log(data);
  return (
        <div className='fp'>
        {loading ? "loading" : <>{
            data.map((item) =>(
                <div className='fpItem' key={item._id}>
                    <img src={item.photos[0]} className='fpImg'></img>
                    <span className='fpName'>{item.name}</span>
                    <span className='fpCity'>{item.city}</span>
                    <span className='fpPrice'>starting from Rs.{item.cheapestPrice}</span>
                    {item.rating && <div className='fpRating'>
                        <button>{item.rating}</button>
                        <span>Excellent</span>
                    </div>}
                </div>
                ))
            }
        </>
        }
         </div>
   
   
  )
}

export default FeaturedProperties