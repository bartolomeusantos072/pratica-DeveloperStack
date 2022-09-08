import { Request, Response } from "express";
import answerService from "../services/answerService";
import questionService from "../services/questionService";
import { CreateAnswer } from "../types/answerTypes";
import { CreateQuestion } from "../types/questionTypes";

export async function createQuestion(req: Request, res: Response) {
  const question:CreateQuestion = req.body;
  await questionService.insert(question);
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
    const allAnswers: CreateAnswer = req.body;
    const idQuestion = Number(req.params.id);
    await answerService.insert({...allAnswers,idQuestion})
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.findAll();
  res.send(questions);
}

export async function getById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const question = await questionService.findById(id);

  res.send(question);
}
