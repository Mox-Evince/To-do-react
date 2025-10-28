import { z } from "zod";

export const PostSchema = z.object({
  firstName: z.string().nonempty("Please enter first name"),
  postName: z.string().nonempty("Please enter post name"),
  postType: z.string().refine((val) => !!val && val.trim() !== "", {
    message: "Please select post type",
  }),
});

export type PostFormValue = z.infer<typeof PostSchema>;
