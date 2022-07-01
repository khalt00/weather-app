import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useTokenAuthMutation } from "api/users";
export interface FormLoginProps {}
interface SignInFormInputs {
  email: string;
  password: string;
}

export function FormLogin() {
  const tokenAuthMutation = useTokenAuthMutation();
  const validationSchema = yup
    .object()
    .shape({
      email: yup.string().email("Enter a valid email").required("Email is required"),
      password: yup
        .string()
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
    })
    .required();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: SignInFormInputs) => {
    tokenAuthMutation.mutateAsync(data).catch((error) => {
      // show error message + animation when login failed
      console.log(error); //handleShow err form
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <Controller
          control={control}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState: { touchedFields, dirtyFields },
          }) => (
            <TextField
              id="standard-basic"
              label="Email *"
              variant="standard"
              fullWidth
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              error={invalid}
              helperText={error?.message}
              inputRef={ref}
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          name="password"
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState: { touchedFields, dirtyFields },
          }) => (
            <TextField
              type="password"
              id="standard-basic"
              label="Password *"
              variant="standard"
              fullWidth
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              error={invalid}
              helperText={error?.message}
            />
          )}
        />

        {/* <TextField
        id="standard-basic"
        label="Email *"
        variant="standard"
        fullWidth
        size="small"
        name="email"
        // onBlur={(e) => handleBlur(e, "#email")}
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        sx={{ mt: 2 }}
        id="standard-basic"
        label="Password *"
        variant="standard"
        size="small"
        name="password"
        // onBlur={(e) => handleBlur(e, "#password")}
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />*/}
        <Button
          type="submit"
          className="btn__save"
          // className={classNames(!!errors ? "btn__disable" : "btn__save")}
          variant="contained"
          sx={{
            mt: 6,
          }}
          fullWidth
          size="large"
          // disabled={
          //   valueInput.email.trim() === "" || valueInput.password.trim() === ""
          // }
          // disabled={!!errors}
        >
          Login
        </Button>
      </>
    </form>
  );
}
