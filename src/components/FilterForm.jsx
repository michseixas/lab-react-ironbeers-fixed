import { useState } from "react"

 function FilterForm({filterFunction}) {

    const [text, setText] = useState("");

    const submitHandler = (e) => {
        //this is EXACTLY THE SAME as if we define it in the onClick event of the button
        e.preventDefault();
        filterFunction(text);
    }

    return (
        <form className="d-flex" role="search" onSubmit={submitHandler}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={(e) => setText(e.target.value)}/>
            
            <button className="btn btn-outline-success" type="submit">Filter Beers</button>
        </form>
    )
}

export default FilterForm;
