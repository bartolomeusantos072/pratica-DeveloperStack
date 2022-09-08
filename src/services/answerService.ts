import answerRepository from "../repositories/answerRepository";
import { TCreateAnswer } from "../types/answerTypes";



async function insert(createAnswer:TCreateAnswer) {
    await answerRepository.insert(createAnswer);
}

export default{
    insert
};