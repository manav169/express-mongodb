import React from "react";
import { useForm } from "react-hook-form";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    axios.post(`http://localhost:8080/api/post`, data).then((resp) => {
      console.log("resp is", resp);
      navigate("/");
    });
  };

  return (
    <div className="App">
      <h3>Create Car</h3>
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

        <div className="form-control">
          <label></label>
          <button type="submit">Create Car</button>
        </div>
      </form>
    </div>
  );
}
