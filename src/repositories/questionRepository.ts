import { CreateQuestion } from "../types/questionTypes";
import { prisma } from "./../config/database";


async function insert(createQuestion: CreateQuestion) {
  await prisma.question.create({
    data: createQuestion
  });
}

async function findById(id: number) {
  return prisma.question.findUnique({
    where: { id },
    include: {
      answers: true
    }
  });
}

async function findAll() {
  return prisma.question.findMany()
}

export default {
  insert,
  findById,
  findAll
};
