import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "./Provider";
import cd from "../assets/cd.png"
import "./AlbumsIndexPage.css"


function AlbumsIndexPage() {
    const {API, axios} = useContextProvider()
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        axios.get(`${API}/albums`)
        .then(respJson => setAlbums(respJson.data))
        .catch(err => console.log(err))
    },[]) 

    return (
        <div className="albumsIndex center-page">
            <h1>Albums Index</h1>
            <section className="albums">
                {
                    albums.map(({album_artist, album_name, id})=>
                        <div className="album" key = {id}>
                            <Link to={`/albums/${id}`}>
                                <img src={cd} alt="cd" />
                                <h2>{album_name}</h2>
                                <p>{album_artist}</p>
                            </Link>
                        </div>
                    )
                }
            </section>
        </div>
    );
}

export default AlbumsIndexPage;