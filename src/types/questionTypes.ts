import { Questions } from "@prisma/client";

export type TCreateQuestion = Omit<Questions, "id">;