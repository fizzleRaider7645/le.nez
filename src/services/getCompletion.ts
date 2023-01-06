import { Configuration, OpenAIApi } from 'openai';

async function getCompletion(prompt: string) {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_SECRET_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
  });
  return completion.data;
}

export default getCompletion