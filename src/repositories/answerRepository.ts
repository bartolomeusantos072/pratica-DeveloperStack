import { CreateAnswer } from "../types/answerTypes";
import { prisma } from "./../config/database";

async function findById(questionId: number) {
    return prisma.answer.findUnique({
      where: { id: questionId },
    });
  }
  
  async function insert(createAnswerData: CreateAnswer) {
    await prisma.answer.create({
      data: createAnswerData,
    });
  }
  
  export default {
    findById,
    insert
  };
  