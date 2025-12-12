import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { PostSchema, type PostFormValue } from "../../schemas/post";
import AdvanceInput from "../../components/AdvanceInput";
import { DevTool } from "@hookform/devtools";

export const Route = createFileRoute("/_posts/posts/add")({
  component: RouteComponent,
});

function RouteComponent() {
  const methods = useForm({
    resolver: zodResolver(PostSchema),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<PostFormValue> = (data) => {
    console.log(data);
  };
  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-4 text-start">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              {...register("firstName")}
            />
            {errors.firstName?.message && (
              <span className="text-danger">{errors.firstName.message}</span>
            )}
          </div>
          <div className="col-4 text-start">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <AdvanceInput className="form-control" {...register("postName")} />
            {errors.postName?.message && (
              <span className="text-danger">{errors.postName.message}</span>
            )}
          </div>
          <div className="col-4 text-start">
            <label htmlFor="title" className="form-label">
              Post Type
            </label>
            <Controller
              name="postType"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <AdvanceInput
                  className="form-control"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />

            {errors.postType?.message && (
              <span className="text-danger">{errors.postType.message}</span>
            )}
          </div>
        </div>
        <button className="btn btn-primary">Add Post</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
