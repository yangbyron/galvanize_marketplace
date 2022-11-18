import React, { useState }from "react";



const AddItemForm = ({ setList }) => {
    const[name, setName] = useState("")
    const[image, setImage] = useState("")
    const[description, setDescription] = useState("")
    const[category, setCategory] = useState("")
    const[price, setPrice] = useState("")

    
    const handleSubmit = (e) => {
        e.preventDefault();
        let inputData = {name: name, image_path:image, description:description, category:category, price: price }
        fetch('http://localhost:4000/api/createItems', {
            method: 'POST',
            body: JSON.stringify(inputData),
            headers: {
                "Content-Type": "application/json",
            },
           

        })
        setList(inputData.name)
        
        setName("")
        setImage("")
        setDescription("")
        setCategory("")
        setPrice("")


    }

  

    return (
        <div>
        
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <input type='text' placeholder="Image" onChange={(e) => setImage(e.target.value)}/>
            <input type='text' placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
            <input type='text' placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="Books">Books</option>
                <option value="Electronics">Electronics</option>
                <option value="Outdoor">Outdoor</option>
                </select>
            <button type="submit">Submit</button>
        </form>
        
        <button type="submit">Cancel</button>
 
        </div>
        
    );
};

export default AddItemForm;
