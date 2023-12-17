export const systemPrompt = (category) => {
  if (category === "" || category === null) {
    category = "for you to choose";
  }
  console.log(category);
  return `The category is ${category}, choose a random subject from the category and create an unseen article, make it 2 paragraph long.
    Insert \n\n when needed for a new paragraph in the article.
    Based on the article you just created, create a quiz of 4 multipliy choice questions, that has 4 possible answers with only one is correct. 
    In addition create 2 open questions, don't supply any choice answers. the possible answer to it should appear in the article you provided.
    
    The questions has to be based on the article, and the correct answers has to be found inside the article. 
    Don't create questions that are not based on the article or the correct answer couldn't be found in the article. 
    Don't create questions that are the same in a different phrasing.
    
    the maximum number of questions is 6.
    
    `;
};

export const userPrompt = () => {
  return `the correct answer for each multi choice question's "isCorrect" should be true, all the rest of the possible answers should be false.
  display all the data to a json. this is the only format that you should return:


{
  "article": {
    "title": string,
    "content": string
  },
  "questions": [
    {
      "id": 1,
      "question": string,
      "possibleAnswers": [
        { "answer": string, "isCorrect": boolean },
        { "answer": string, "isCorrect": boolean},
        { "answer": string, "isCorrect": boolean },
        { "answer": string, "isCorrect": boolean }
      ]
    },
  {
      "id": 2,
      "question": string,
      "possibleAnswers": [
        { "answer": string, "isCorrect": boolean },
        { "answer": string, "isCorrect": boolean },
        { "answer": string, "isCorrect": boolean },
        { "answer": string, "isCorrect": boolean }
      ]
    },
        {
      "id": 9,
      "question": string,
      "possibleAnswers": [
        "This is an open question, there are no options to choose from. Write your own answer and submit."
      ]
    },
         ]
}`;
};
