import { z } from "zod";
import { api } from "../api";

export const addTechSchema = z.object({
  title: z
  .string()
  .nonempty("Este campo é obrigatório"),
  status: z
  .string()
  .nonempty("Este campo é obrigatório")
})