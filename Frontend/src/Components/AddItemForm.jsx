import React, { useRef }from "react";

const AddItemForm = ({ currentUser, update, setUpdate }) => {
    //const[name, setName] = useState("")
    //const[image, setImage] = useState("")
    //const[description, setDescription] = useState("")
    //const[category, setCategory] = useState("Books")
    //const[price, setPrice] = useState("")

    const name = useRef();
    const image = useRef();
    const description = useRef();
    const category = useRef();
    const price = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        let inputData = {
            name: name.current.value, 
            image_path: image.current.value, 
            description: description.current.value, 
            category: category.current.value, 
            price: price.current.value, 
            user_email: currentUser.email 
        }
        fetch('http://localhost:4000/api/createItems', {
            method: 'POST',
            body: JSON.stringify(inputData),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(() => {
            setUpdate(!update)
          })
        
        name.current.value = ""
        image.current.value = ""
        description.current.value = ""
        category.current.value = ""
        price.current.value = ""
    }

    return (
        <div className="addItem">
        
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="Name" ref={name} />
                <input type='text' placeholder="Image" ref={image} />
                <input type='text' placeholder="Description" ref={description}/>
                <input type='text' placeholder="Price" ref={price} />
                <select ref={category} >
                    <option></option>
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
