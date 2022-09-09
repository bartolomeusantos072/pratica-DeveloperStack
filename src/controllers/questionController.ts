import { Request, Response } from "express";
import answerService from "../services/answerService";
import questionService from "../services/questionService";
import { TCreateAnswer } from "../types/answerTypes";
import { TCreateQuestion } from "../types/questionTypes";


export async function createQuestion(req: Request, res: Response) {
  const question:TCreateQuestion = req.body;
  await questionService.insert(question);
  res.status(201).send('Pergunta criada com sucesso!!');;
}

export async function createAnswer(req: Request, res: Response) {
  const idQuestion= Number(req.params.id);
    const allAnswers: TCreateAnswer = req.body;
    await answerService.insert(idQuestion,allAnswers)
    res.status(200).send('Resposta adicionada com sucesso!!');
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.findAll();
  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const question = await questionService.findById(id);

  res.status(200).send(question);
}
