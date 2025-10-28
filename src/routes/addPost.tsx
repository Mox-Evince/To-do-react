import { createFileRoute } from "@tanstack/react-router";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { Autocomplete, Button, TextField } from "@mui/material";
import { PostSchema, type PostFormValue } from "../schemas/post";
import { zodResolver } from "@hookform/resolvers/zod";

type PostEnum = "facts" | "entertainment" | "business" | "other";

export const Route = createFileRoute("/addPost")({
  component: AddPostComponent,
});

function AddPostComponent() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PostFormValue>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      postType: "",
    },
  });

  const postTypes: PostEnum[] = ["facts", "business", "entertainment", "other"];
  const onSubmit: SubmitHandler<PostFormValue> = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-6">
            <TextField
              className="w-100"
              label="First Name"
              {...register("firstName")}
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName.message : ""}
            />
          </div>
          <div className="col-6">
            <TextField
              className="w-100"
              label="Post Name"
              {...register("postName")}
              error={!!errors.postName}
              helperText={
                <span>{errors.postName ? errors.postName.message : ""}</span>
              }
            />
          </div>
          <div className="col-6 my-2">
            <Controller
              name="postType"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Autocomplete
                  {...field}
                  value={field.value ?? ""}
                  options={postTypes}
                  onChange={(_, value) => field.onChange(value ?? "")} // Update form value
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
