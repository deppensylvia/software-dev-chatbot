const cors = require('cors'); 
process.env["NODE_TLS_REJECT_UNAUTHORIZED"]=0;
const express = require('express');
const path = require('path');
const { OpenAIAPI } = require('./openai');

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(cors({origin: 'http://127.0.0.1:5500'}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/getChatbotResponse', async (req, res) => {
     try {
        const userMessage = req.body.userMessage;
        // Use OpenAI API to generate a response
        const chatbotResponse = await OpenAIAPI.generateResponse(userMessage);
        // Send the response back to the client
        res.json({ chatbotResponse });
    } catch (error) {
        console.error('Error in /getChatbotResponse:', error);
        res.status(500).json({ chatbotResponse: 'Sorry, there was an error processing your request.' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});