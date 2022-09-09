import Joi from 'joi';
import { TCreateQuestion } from '../types/questionTypes';

export const questionSchema = Joi.object<TCreateQuestion>({

  askedBy: Joi.string().required(),
  question: Joi.string().required()
});
