import { TCreateAnswer } from "../types/answerTypes";
import { prisma } from "./../config/database";

async function findById(questionId: number) {
    return prisma.answers.findUnique({
      where: { id: questionId },
    });
  }
  
  export async function insert(questionId: number, answer: TCreateAnswer) {
    await prisma.answers.create({ data: { questionId, ...answer } });
  }
  
  
  export default {
    findById,
    insert
  };
  