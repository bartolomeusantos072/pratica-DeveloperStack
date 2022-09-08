
import questionRepository from "../repositories/questionRepository";
import { CreateQuestion } from "../types/questionTypes";



async function insert(createQuestion: CreateQuestion) {
  await questionRepository.insert(createQuestion);
}

async function findById(questionId: number) {
  const question = await questionRepository.findById(questionId);
  if (!question) throw { type: "not_found" };

  return question;
}

async function findAll() {
  return questionRepository.findAll();
}

export default {
  insert,
  findById,
  findAll,
};
