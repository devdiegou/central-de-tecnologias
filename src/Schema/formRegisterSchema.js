import { z } from "zod";

export const formRegisterSchema = z.object({
  name: z
  .string()
  .nonempty("Este campo é obrigatório."),

  email: z
  .string()
  .nonempty("Este campo é obrigatório.")
  .email("Digite um email válido"),

  password: z
  .string()
  .nonempty("Este campo é obrigatório.")
  .min(8, "Deve conter, pelo menos, 8 caracteres.")
  .regex(/(?=.*?[A-Z])/, "A senha deve conter, pelo menos, uma letra maiúscula.")
  .regex(/(?=.*?[a-z])/, "A senha deve conter, pelo menos, uma letra minúscula.")
  .regex(/(?=.*?[0-9])/, "A senha deve conter, pelo menos, um número.")
  .regex(/(?=.*?[#?!@$%^&*-])/, "A senha deve conter, pelo menos, um caractere especial"),

  confirmPassword: z
  .string()
  .nonempty("É obrigatória a confirmação de senha."),

  bio: z
  .string()
  .nonempty("Este campo é obrigatório"),

  contact: z
  .string()
  .nonempty("Este campo é obrigatório"),

  course_module: z
  .string()
  .nonempty("Este campo é obrigatório.")
}).refine(({password, confirmPassword}) => password === confirmPassword, {
  message: "As senhas não coincidem.",
  path: ["confirmPassword"]
});