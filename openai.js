require('dotenv').config();
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

class OpenAIAPI {
    static async generateResponse(userMessage, conversationHistory = []) {
        try {
            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo-1106",
                messages: conversationHistory.concat([{ role: 'user', content: userMessage }]),
                max_tokens: 150,
            });
            console.log(completion)
            return completion.choices[0].message.content;
        } catch (error) {
            console.error('Error generating response:', error);
            return 'Sorry, I couldn\'t understand that.';
        }
    }
}
module.exports = { OpenAIAPI };