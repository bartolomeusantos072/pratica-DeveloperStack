import answerRepository from "../repositories/answerRepository";
import { TCreateAnswer } from "../types/answerTypes";



async function insert(id: number,createAnswer:TCreateAnswer) {
   return await answerRepository.insert(id,createAnswer);
}

export default{
    insert
};