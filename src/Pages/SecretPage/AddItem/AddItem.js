import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://secret-sands-49470.herokuapp.com/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("Input Item update Successfully");
      });
  };

  return (
    <div>
      <h4 className="text-warning">To update New Item !</h4>
      <small>Fill up bellow field</small>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-3 w-50 d-flex flex-column "
      >
        <input
          className="mb-2"
          required
          placeholder="Name"
          {...register("name")}
        />
        <input
          className="mb-2"
          required
          placeholder="Brand"
          {...register("Brand")}
        />
        <input
          className="mb-2"
          required
          placeholder="Type"
          {...register("type")}
        />
        <textarea
          className="mb-2"
          required
          placeholder="Description"
          {...register("Description")}
        />
        <input
          className="mb-2"
          required
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          required
          placeholder="Stock"
          type="number"
          {...register("Stock")}
        />
        <input
          className="mb-2"
          required
          placeholder="img url"
          {...register("img")}
        />
        <input
          className="mb-2 w-50 mx-auto btn btn-info"
          required
          placeholder=""
          type="submit"
          value="Add New Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
