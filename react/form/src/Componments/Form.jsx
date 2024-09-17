import { useForm } from "react-hook-form";
import React from "react";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        {...register("user_name", { required: true, minLength:3 })}
        placeholder="user_name"
      />
      {errors.user_name && <div>ERROR</div>}

      <input
        {...register("passworsd", { required: true, minLength:8 })}
        placeholder="passworsd"
      />

      <input type="submit" />
    </form>
  );
}

export default Form;
