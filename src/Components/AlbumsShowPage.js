import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useContextProvider } from "./Provider";
import plaques from "../assets/album-plaques.png"
import cd from "../assets/cd.png"
import "./AlbumsShowPage.css"
    
function AlbumsShowPage() {
    const {API, axios} = useContextProvider()
    const {id} = useParams()
    const [thisAlbum, setThisAlbum] = useState({})
    const [albumSongs, setAlbumSongs] = useState([])

        useEffect(() => {
            axios.get(`${API}/albums/${id}`)
            .then(respJson => setThisAlbum(respJson.data))
            .catch(err=> console.log(err))

            axios.get(`${API}/albums/${id}/songs`)
            .then(respJson => setAlbumSongs(respJson.data))
            .catch(err => console.log(err))
        },[])

    return (
        <div className='albumShow center-page'>
            <div className="cover center-page background-image">
            <img src={plaques} alt="album-plaques" />
            <section className="album-stats">
                <img src ={cd} alt="cd" />
                <p>
                    <span>Album: {thisAlbum.album_name}</span>
                    <span>Artist: {thisAlbum.album_artist}</span>
                    <span>Released: {thisAlbum.released}</span>
                    <span>Copies Sold: {thisAlbum.units_sold}</span>
                </p>
            </section>
            <section className="album-songs">
                <h3>Track List</h3>
                <hr />
                {
                    albumSongs.map(({name, time, id}) =>
                        <li key={id}>
                            <Link to={`/songs/${id}`}>
                                <span>{name}</span>
                            </Link>
                            <span>{time}</span>
                        </li>
                        
                    )
                }
            </section>
            </div>
        </div>
    );
}

export default AlbumsShowPage;