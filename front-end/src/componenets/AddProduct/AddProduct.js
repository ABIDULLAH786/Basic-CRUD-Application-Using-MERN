import { useState } from "react";
import { SERVER_LINK } from "../Constants";

const AddProduct = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const handleSubmit = async (event) => {
        console.log(`
      title: ${title}
      price: ${price}
      Descrioption: ${description}
    `);

        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, price: price, description: description })
        };
        const response = await fetch(`${SERVER_LINK}/products/create`, requestOptions);
        const data = await response.json();
        console.log(data.id);

        setTitle("")
        setPrice(0)
        setDescription("")
    }
    return (
        <div className="container col-md-4 col-sm-4 col-xs-12 col-lg-4 my-5 border">
            <h1 className="text-center my-3">Add Product</h1>
            <div>

                <div className="">
                    <form onSubmit={handleSubmit} className="px-4 py-3">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text"
                                className="form-control"
                                id="title"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="price">Price</label>
                            <input type="number"
                                className="form-control"
                                id="price"
                                placeholder="0"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="price">Description</label>
                            <textarea
                                className="form-control"
                                id="price"
                                placeholder="Write Description..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <button className="btn btn-primary w-100">Add Product</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default AddProduct