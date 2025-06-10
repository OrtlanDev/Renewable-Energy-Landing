import { z } from "zod";

export const authSchema = z.object({
    username: z
        .string()
        .min(1, "El nombre es obligatorio")
        .regex(/^[A-Za-z0-9]+$/, "Solo letras y números, sin espacios ni caracteres especiales"),
    password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});
