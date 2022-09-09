
import { prisma } from "./../config/database";
import { TCreateQuestion } from "../types/questionTypes";


async function insert(createQuestion: TCreateQuestion) {
  await prisma.questions.create({
    data: createQuestion
  });
}

async function findById(id: number) {
  return prisma.questions.findUnique({
    where: { id },
    include: {
      answer: true
    }
  });
}

async function findAll() {
  return prisma.questions.findMany()
}

export default {
  insert,
  findById,
  findAll
};
