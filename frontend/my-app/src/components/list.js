import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function List() {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCars();
    }, []);

    const getCars = () => {
        axios
            .get("http://localhost:8080/api/getAll")
            .then((resp) => {
                console.log("resp is", resp.data);
                setCars(resp.data);
            })
    };

    const createBtn = () => {
        navigate("create");
        };

    const editBtn = (id) => {
        navigate(`edit/${id}`);
    };
    const deleteBtn = (id) => {
    axios.delete(`http://localhost:8080/api/delete/${id}`)
        .then((resp) => {
            console.log("Response is", resp.data);
            getCars();
        });
};



     return (
       <div className="center">
         This is List components
         <br />
         Create Car<button onClick={() => createBtn()}>Create Car</button>
         <table border={1} className="w-100">
           <thead>
             <tr>
               <th>Name</th>
               <th>Brand</th>
               <th>Quantity</th>
               <th>Actions</th>
             </tr>
           </thead>
           {cars.map((car) => (
             <tbody key={car._id}>
               <tr>
                 <td>{car.name}</td>
                 <td>{car.brand}</td>
                 <td>{car.quantity}</td>
                 <td>
                   <button onClick={() => editBtn(car._id)}>Edit</button>
                   <button onClick={() => deleteBtn(car._id)}>Delete</button>
                 </td>
               </tr>
             </tbody>
           ))}
         </table>
       </div>
     );
}