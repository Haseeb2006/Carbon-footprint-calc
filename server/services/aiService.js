const OpenAI = require('openai');

const openai = new OpenAI(process.env.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);

async function generateSummary(videoPath) {
  // In a real application, you would transcribe the video and use the transcription
  // For this example, we'll use a placeholder text
  const transcription = "This is a placeholder transcription of the video content.";

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant that generates summaries of educational videos." },
      { role: "user", content: `Please provide a concise summary of the following video transcription: ${transcription}` }
    ],
    max_tokens: 150
  });

  return response.choices[0].message.content;
}

async function generateQuiz(videoPath) {
  // In a real application, you would use the video transcription
  // For this example, we'll use a placeholder text
  const transcription = "This is a placeholder transcription of the video content.";

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant that generates quiz questions based on educational video content." },
      { role: "user", content: `Please generate 3 multiple-choice quiz questions based on the following video transcription. Provide the correct answer for each question: ${transcription}` }
    ],
    max_tokens: 300
  });

  const quizText = response.choices[0].message.content;
  // Parse the quiz text and convert it to the required format
  // This is a simplified example and may need to be adjusted based on the actual output format
  const quizQuestions = quizText.split('\n\n').map(q => {
    const [question, ...options] = q.split('\n');
    const correctAnswer = options.find(o => o.includes('(correct)'))?.replace('(correct)', '').trim();
    return {
      question: question.replace(/^\d+\.\s/, ''),
      options: options.map(o => o.replace(/^[a-d]\)\s/, '').replace('(correct)', '').trim()),
      correctAnswer
    };
  });

  return quizQuestions;
}

async function generateNotes(videoPath) {
  // In a real application, you would use the video transcription
  // For this example, we'll use a placeholder text
  const transcription = "This is a placeholder transcription of the video content.";

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant that generates concise notes from educational video content." },
      { role: "user", content: `Please generate brief, bullet-point style notes based on the following video transcription: ${transcription}` }
    ],
    max_tokens: 200
  });

  return response.choices[0].message.content;
}

module.exports = {
  generateSummary,
  generateQuiz,
  generateNotes
};