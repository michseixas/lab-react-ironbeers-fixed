import axios from "axios";
import { useState } from "react"
import {useNavigate } from "react-router-dom";

export default function NewBeer() {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState("");


    const navigate = useNavigate();

    const clickHandler = (e) => {
        e.preventDefault();

        //create a new beer
        // create the new beer object
        let newBeer = {
            name,
            tagline,
            description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        }
        //2. send the new beer to the API
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        .then(()=>{
            // return <Navigate to="/beers" />
            navigate("/beers");
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className="w-75 mx-auto">
            <h1 className="mt-5 mb-5">Create a new beer!!!</h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tagline" className="form-label">Tagline</label>
                    <input type="text" className="form-control" id="tagline" value={tagline} onChange={(e)=>setTagline(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="firstBrewed" className="form-label">First Brewed</label>
                    <input type="text" className="form-control" id="firstBrewed" value={firstBrewed} onChange={(e)=>setFirstBrewed(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="brewersTips" className="form-label">Brewers Tips</label>
                    <input type="text" className="form-control" id="brewersTips" value={brewersTips} onChange={(e)=>setBrewersTips(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="attenuationLevel" className="form-label">Attenuation Level</label>
                    <input type="number" className="form-control" id="attenuationLevel" value={attenuationLevel} onChange={(e)=>setAttenuationLevel(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="contributedBy" className="form-label">Contributed by</label>
                    <input type="text" className="form-control" id="contributedBy" value={contributedBy} onChange={(e)=>setContributedBy(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={clickHandler}>Create new beer</button>
            </form>
        </div>
    )
}
