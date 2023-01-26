import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "./Provider";
import { MdDeleteForever } from "react-icons/md"
import cd from "../assets/cd.png"
import "./AlbumsIndexPage.css"


function AlbumsIndexPage() {
    const {API, axios} = useContextProvider()
    const [albums, setAlbums] = useState([])

    function deleteSong (value) {
        axios.delete(`${API}/albums/${value}`)
            .then(() => console.log(`deleted`))
            .catch(err => console.log(err))
        // update albumSongs data on component
        const newAlbums = albums.filter(({id}) => value !== id)
        setAlbums(newAlbums)
    }

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
                            <span
                                className="cursor"
                                onClick={() => deleteSong(id)}>
                                    <MdDeleteForever size = {"20px"} color={"black"} />
                            </span>
                        </div>
                    )
                }
            </section>
        </div>
    );
}

export default AlbumsIndexPage;