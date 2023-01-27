import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContextProvider } from "./Provider";
import Form from "../ReusableComponents/Form";
import AlbumsEditPage from "./AlbumsEditPage";
import { AiFillFastBackward } from "react-icons/ai"
import { MdDeleteForever } from "react-icons/md"
import plaques from "../assets/album-plaques.png"
import cd from "../assets/cd.png"
import addSong from "../assets/add-song-gold.png"
import edit from "../assets/edit-file-gold.png"
import "./AlbumsShowPage.css"
    
function AlbumsShowPage() {
    const {API, axios} = useContextProvider()
    const {id} = useParams()
    const navigate = useNavigate()
    const [thisAlbum, setThisAlbum] = useState({})
    const [albumSongs, setAlbumSongs] = useState([])
    const [showEditForm, setShowEditForm] = useState(false)
    const [checked, setChecked] = useState(false)
    const [newAlbumSong, setNewAlbumSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: checked,
    })



    function deleteSong (value) {
        axios.delete(`${API}/songs/${value}`)
            .then(() => {})
            .catch(err => navigate("/*"))
        // update albumSongs data on component
        const newAlbumSongs = albumSongs.filter(({id}) => value !== id)
        setAlbumSongs(newAlbumSongs)
    }

    function addDefaultAlbumValues(obj) {
        obj.artist = thisAlbum.album_artist
        obj.album = thisAlbum.album_name
        obj.album_id = id
    }

    function handleSubmit(e) {
        e.preventDefault()
        addDefaultAlbumValues(newAlbumSong)
        axios.post(`${API}/songs`, newAlbumSong)
        .then(respJson => {
            const updatedSongs = [...albumSongs, respJson.data]
            setAlbumSongs(updatedSongs)
        })
        .catch(err => navigate("/*"))
        setNewAlbumSong({
            name: "",
            artist: "",
            album: "",
            time: "",
            is_favorite: false,
        })
    }

    useEffect(() => {
        axios.get(`${API}/albums/${id}`)
        .then(respJson => setThisAlbum(respJson.data))
        .catch(err=> console.log(err))

        axios.get(`${API}/albums/${id}/songs`)
        .then(respJson => setAlbumSongs(respJson.data))
        .catch(err => navigate("/*"))
    },[id, albumSongs.length])

    return (
        <div className='albumShow center-page '>
            <aside className="new-album-song gold-text">
                <img src={addSong} alt="add-song" />
                <Form 
                submitFunction={handleSubmit}
                stateVar={newAlbumSong}
                setFunction={setNewAlbumSong}
                checkboxVar={checked}
                checkboxFunction={setChecked}
                checkboxIcon={"45px"}
                albumShow={true}
                />

                {/* <form 
                className=""
                onSubmit={(event) => handleSubmit(event)}>
                    <TextInput 
                    title={'Song Title'}
                    value={'name'}
                    stateVar={newAlbumSong}
                    setFunction={setNewAlbumSong}/>
                    <TextInput 
                    title={'Length'}
                    value={'time'}
                    stateVar={newAlbumSong}
                    setFunction={setNewAlbumSong}/>
                    <CheckboxInput 
                    value={'is_favorite'}
                    stateVar={newAlbumSong}
                    checkboxVar={checked}
                    checkboxFunction={setChecked}
                    iconSize={"45px"}/>

                    <input 
                    type="submit" 
                    value="Add Song To Album"
                    className="gold-text cursor" />

                </form> */}
                <Link to = {`/albums`}>
                    <AiFillFastBackward
                    size={"50px"}
                    color={"#A57D02"} />
                </Link>
            </aside>
            <div className="cover center-page background-image">
            <img src={plaques} alt="album-plaques" />

            <button 
            className="cursor"
            onClick={() => setShowEditForm(!showEditForm)}>
                <img src={edit} alt="edit" />
            </button>
            {
                showEditForm ? 
                <section className="album-edit-cover">
                    <AlbumsEditPage 
                    albumSetFunction={setThisAlbum}
                    toggleButton={setShowEditForm} />
                </section>
                 :
                <section className="album-stats gold-text ">
                <img src ={cd} alt="cd" />
                <p>
                    <span>Album: {thisAlbum.album_name}</span>
                    <span>Artist: {thisAlbum.album_artist}</span>
                    <span>Released: {thisAlbum.released}</span>
                    <span>Copies Sold: {thisAlbum.units_sold}</span>
                </p>
            </section>
            }
            
            
            <section className="album-songs gold-text">
                <h3 className="gold-text">Track List</h3>
                <hr />
                <section className="songs-list">
                {
                    albumSongs.map(({name, time, id}) =>
                        <li key={id}>
                            <Link to={`/songs/${id}`}>
                                <span>{name}</span>
                            </Link>
                            <span>{time}</span>
                            <span
                            className="cursor"
                            onClick={() => deleteSong(id)}>
                                <MdDeleteForever size = {"20px"} color={"#A57D02"} />
                            </span>
                        </li> 
                    )
                }
                </section>
               
            </section>
            </div>
        </div>
    );
}

export default AlbumsShowPage;