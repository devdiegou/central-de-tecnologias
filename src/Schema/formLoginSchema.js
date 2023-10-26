import { z } from "zod";

export const formLoginSchema = z.object({
  email: z
  .string()
  .nonempty("Este campo é obrigatório.")
  .email("Digite um email válido."),
  password: z
  .string()
  .nonempty("Este campo é obrigatório."),
});
