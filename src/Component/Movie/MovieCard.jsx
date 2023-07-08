import "./Moviecard.css"
export const  MovieCard=({movie})=>{
    const {name,imdb_rating,genre,duration,img_link}=movie
    return(
        <div className="Image-container">
            <div className="image-card">
                <img  className="card-img" src={img_link} alt="" />
            </div>
            <div className="card-detail">
            <div >
                <span className="title">{name}</span>

            </div>
            <div >
                <span className="genere">Genre:{genre}</span>
                
            </div>
            <div  className="rating">
                <span >Rating:{imdb_rating}</span>
                <span>{duration}min</span>
                
            </div>

            </div>
        </div>
        

    )
}