import { z } from "zod";

export const PostSchema = z.object({
  firstName: z.string().nonempty("Please enter first name"),
  postName: z.string().nonempty("Please enter post name"),
  category: z.string().refine((val) => !!val && val.trim() !== "", {
    message: "Please select post type",
  }),
  tags: z.array(z.string()).nonempty("Please select tag"),
  showPost: z.boolean(),
  postType: z.string().nonempty("Please select category"),
});

export type PostFormValue = z.infer<typeof PostSchema>;
