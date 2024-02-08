import {createCompletion, loadModel, createTokenStream} from 'gpt4all';

const model = await loadModel('mistral-7b-instruct-v0.2.Q4_K_S.gguf', {
    modelPath: 'C:\\Users\\VanyaMate\\.cache\\lm-studio\\models\\TheBloke\\Mistral-7B-Instruct-v0.2-GGUF',
    verbose: true,
})


const response = await createCompletion(model, [
    {role: 'user', content: 'Ответь на 2 вопроса. 1. Как тебя зовут? 2. Как правильно отвечать гражданам в ответных письмах?'}
], {
    promptHeader: 'На вопросы отвечай на русском языке. Называй себя ЦУР-Помощник'
})


console.log(response);
console.log(response.choices.map((message) => message.message))
