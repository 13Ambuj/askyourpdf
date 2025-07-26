
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const askHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { question } = req.body;
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: question }],
  });

  return res.status(200).json({ answer: completion.choices[0].message.content });
};

export default askHandler;
