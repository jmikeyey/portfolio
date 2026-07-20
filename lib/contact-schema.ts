import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please add your name.").max(80),
  email: z.email("Please add a valid email so I can reply."),
  message: z.string().trim().min(10, "A little more detail, please.").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
