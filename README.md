This project is a simple chatbot for learning the basics of using OpenAI's chatgpt api.

The template code was from the Coursera course: https://www.coursera.org/learn/generative-ai-elevate-software-development-career/home/welcome .

To run this project, I used VS Code and the LiveServer extension by Ritwick Dey. This opens the client-side in port 5500.
In a terminal, while in the root folder (software-dev-chatbot) I run `node server.js` to start the server on port 3000.
 
When replicating it locally I rand into several errors. The process to get the code to run has been the following:

1. 403 Error - Change post url in main.js to include the server's port number
2. CORS Error - Installed CORS and specified allowing client port 5500
3. 500 Error - Used documentation to update code structure to import openai as an npm package (https://platform.openai.com/docs/quickstart?api-mode=chat)
4. 429 Error - I exceeded my current quota so I had to take a break... to be continued