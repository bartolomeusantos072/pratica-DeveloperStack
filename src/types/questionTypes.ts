import { Question } from "@prisma/client";
export type TCreateQuestion = Omit<Question, "id">;