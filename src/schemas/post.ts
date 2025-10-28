import { z } from "zod";

export const PostSchema = z.object({
  firstName: z.string().nonempty("Please enter first name"),
  postName: z.string().nonempty("Please enter post name"),
  postType: z.string().refine((val) => !!val && val.trim() !== "", {
    message: "Please select post type",
  }),
  tags: z.array(z.string()).nonempty("Please select tag"),
  showPost: z.boolean(),
});

export type PostFormValue = z.infer<typeof PostSchema>;
