import React,{useEffect} from "react";
import { useForm } from "react-hook-form";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"

export default function Edit() {
    const { register, handleSubmit, setValue } = useForm();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/getOne/${id}`
                );

                Object.entries(response.data).forEach(([fieldName, value]) => {
                    setValue(fieldName, value);
                });
            } catch (error) {
                console.error("Error Fetching data:", error);
            }
        };
        
        fetchData();

    }, [setValue, id]);

    const onSubmit = (data) => {
        console.log(data);
        axios.put(`http://localhost:8080/api/update/${id}`, data)
            .then((resp) => {
                console.log("resp is", resp);
                navigate("/");
            });
    };

    return (
      <div className="App">
        <h3>Edit Car</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Name</label>
          <input type="text" name="name" {...register("name")} />
        </div>
        <div>
          <label>Brand</label>
          <input type="text" name="brand" {...register("brand")} />
        </div>
        <div>
          <label>Quantity</label>
          <input type="text" name="quantity" {...register("quantity")} />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Edit Data</button>

        <div/>
        </form>
      </div>
    );
};  