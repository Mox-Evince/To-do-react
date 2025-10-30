import { createFileRoute } from "@tanstack/react-router";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import { PostSchema, type PostFormValue } from "../schemas/post";
import { zodResolver } from "@hookform/resolvers/zod";
import DeleteIcon from "@mui/icons-material/Delete";
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

  const categoreis: PostEnum[] = [
    "facts",
    "business",
    "entertainment",
    "other",
  ];
  const tags: string[] = ["new", "Post", "Like", "Comment", "share"];
  const postTypes: string[] = ["public", "private", "friends"];
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
          <div className="col-6">
            <FormControl fullWidth>
              <InputLabel id="post-type-label">Post Type</InputLabel>
              <Select
                {...register("postType")}
                label="Post Type"
                labelId="post-type-label"
                error={!!errors.postType}
                defaultValue={""}
              >
                {postTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col-6 my-2">
            <Controller
              name="category"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Autocomplete
                  {...field}
                  value={field.value ?? ""}
                  options={categoreis}
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
          <div className="col-6 my-2">
            <Controller
              name="tags"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Autocomplete
                  multiple
                  options={tags}
                  onChange={(_e, value) => {
                    console.log(value);
                    field.onChange(value);
                  }}
                  disableCloseOnSelect
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Tags"
                      error={!!error}
                      helperText={error ? error.message : ""}
                    />
                  )}
                />
              )}
            />
          </div>
          <div>
            <Tooltip
              title="will show post on everyone's feed"
              arrow
              placement="top"
            >
              <FormLabel> Show Post </FormLabel>
            </Tooltip>
            <Checkbox {...register("showPost")} />
          </div>
          <div>
            <Button variant="contained" color="secondary" type="submit">
              Submit{" "}
            </Button>
            <IconButton aria-label="delete" color="secondary">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </form>
    </div>
  );
}
