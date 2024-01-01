// const messages = [
//   {
//     role: "system",
//     content:
//       "act as an english teacher, create unseen test including an article, multiply choice questions and open questions. check the answers of the user with the questions provided and give the correct answers and a score based of the number of questions.",
//   },
//   {
//     role: "user",
//     content: `The category is ${category}, choose a random subject from the category and create an unseen article, make it 2 paragraph long.
//     Insert \n\n when needed for a new paragraph in the article.
//     Based on the article you just created, create a quiz of 4 multipliy choice questions, that has 4 possible answers with only one is correct.
//     In addition create 2 open questions, don't supply any choice answers. the possible answer to it should appear in the article you provided.

//     The questions has to be based on the article, and the correct answers has to be found inside the article.
//     Don't create questions that are not based on the article or the correct answer couldn't be found in the article.
//     Don't create questions that are the same in a different phrasing.`,
//   },
//   { role: "assistant", content: "Hello, how can I help you" },
//   { role: "user", content: "What is more stylish Pikachu or Neo" },
//   { role: "assistant", content: "Well Neo of course" },
//   { role: "user", content: "Why?" },
//   {
//     role: "assistant",
//     content: "Well Pikachu is naked! there is no style in that",
//   },
// ];

export const userPrompt = (category) => {
  if (category === "" || category === null) {
    category = "randomly chosen";
  }
  // console.log(category);
  return `
  Generate a  4-senteces article from a random subject in the category "${category}." Use \n\n to indicate paragraph breaks.
  
  Create a quiz with 1 multiple-choice question, each with 2 possible answers (only one correct). Ensure that the correct answers are exclusively found within the article. Avoid questions not rooted in the article and refrain from identical phrasing.`;
};

export const systemPrompt = () => {
  return `
  Act as an English teacher. Set "isCorrect" to true for the correct answer in each multiple-choice question, and set all other options to false. Present the data in JSON format; this is the only required format for your response.


{
  
{
  "article": {"title": "", "content": ""},
  "questions": [
  {"id":1,"question":"","possibleAnswers":[{"answer":"","isCorrect":false},{"answer":"","isCorrect":false},{"answer":"","isCorrect":false},{"answer":"","isCorrect":false}]}
]
}`;
};

// {"id":2,"question":"","possibleAnswers":[{"answer":"","isCorrect":false},{"answer":"","isCorrect":false},{"answer":"","isCorrect":false},{"answer":"","isCorrect":false}]},
// {"id":2,"question":"","possibleAnswers":["This is an open question, there are no options to choose from. Write your own answer and submit."]}

export const userAnswersPrompt = () => {
  return `These are the questions and user's answers. In the JSON file, add a 'correctAnswer' key with the correct answer value. Inside the questions object, include a reaction key for the submitted answer. At the bottom of the JSON file, add a 'result' object with 'numericScore' (0-10 based on correct answers) and a 'verbalScore' sentence of your choice.`;
};
