import { createFileRoute } from "@tanstack/react-router";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { Autocomplete, Button, TextField } from "@mui/material";

type PostEnum = "facts" | "entertainment" | "business" | "other";

interface IFormInput {
  firstName: string;
  postName: string;
  postType: PostEnum;
}
export const Route = createFileRoute("/addPost")({
  component: AddPostComponent,
});

function AddPostComponent() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>();

  const postTypes: PostEnum[] = ["facts", "business", "entertainment", "other"];
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column gap-3">
          <div>
            <TextField
              label="First Name"
              {...register("firstName", {
                required: "Please enter first name",
                maxLength: 10,
              })}
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName.message : ""}
            />
          </div>
          <div>
            <TextField
              label="Post Name"
              {...register("postName", { required: "Please enter post name" })}
              error={!!errors.postName}
              helperText={
                <span>{errors.postName ? errors.postName.message : ""}</span>
              }
            />
          </div>
          <div>
            <Controller
              name="postType"
              control={control}
              rules={{ required: "Please select post type" }}
              render={({ field, fieldState: { error } }) => (
                <Autocomplete
                  {...field}
                  options={postTypes}
                  onChange={(_, value) => field.onChange(value)} // Update form value
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Post Type"
                      error={!!error}
                      helperText={error ? error.message : ""}
                    />
                  )}
                />
              )}
            />
          </div>
          <div>
            <Button variant="contained" color="secondary" type="submit">
              Submit{" "}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
