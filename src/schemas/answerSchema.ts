import Joi from 'joi';
import { TCreateAnswer } from '../types/answerTypes';

export const answerSchema = Joi.object<TCreateAnswer>({
  answeredBy: Joi.string().required(),
  answer: Joi.string().required()
});
