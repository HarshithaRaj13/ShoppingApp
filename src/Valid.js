import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// import Header from "./App";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Please enter valid email").required("enter email"),
  age: yup.number().integer().positive().required(),
  password: yup
    .string()
    .required()
    .min(4, "minimum 4 char required")
    .max(15, "enter upto 15 char"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});
function Valid() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  return (
    <div className="Valid">
      <div className="title"> Sign up</div>
      <div className="inputs">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <input
            type="text"
            class="form-control "
            {...register("firstName")}
            placeholder="First name..."
          />
          <p>{errors.firstName?.message}</p>
          <input
            type="text"
            class="form-control "
            {...register("lastName")}
            placeholder="Last name..."
          />
          <p>{errors.lastName?.message}</p>
          <input
            type="text"
            class="form-control "
            {...register("email")}
            placeholder="Email ID..."
          />
          <p>{errors.email?.message}</p>
          <input
            type="number"
            class="form-control "
            {...register("age", {
              pattern: {
                value: /^(1[89]|[2-9]\d|\d{1})$/,
                message: "Please enter a two-digit age.",
              },
            })}
            placeholder="age..."
          />
          <p>{errors.age?.message}</p>
          <input
            type="password"
            class="form-control "
            {...register("password")}
            placeholder="Password..."
          />
          <p>{errors.password?.message}</p>
          <input
            type="password"
            class="form-control "
            {...register("confirmPassword")}
            placeholder="Confirm Password..."
          />
          <p>{errors.confirmPassword?.message}</p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}
export default Valid;
