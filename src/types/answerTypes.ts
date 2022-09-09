import {Answers} from "@prisma/client";

export type TCreateAnswer = Omit <Answers,"id"|"questionId">;