// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Question from './Question';

function Form() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: 'MCQ',
      questionText: '',
      options: [{ id: 1, optionText: '' }],
    },
  ]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { id: questions.length + 1, type: 'MCQ', questionText: '', options: [{ id: 1, optionText: '' }] }]);
  };

  const handleRemoveQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleSubmit = () => {
    // Validate the form here
    // ...

    // Format the form data into JSON
    const formData = {
      questions: questions.map((q) => ({
        questionId: q.id,
        type: q.type,
        questionText: q.questionText,
        options: q.options.map((o) => ({ optionId: o.id, optionText: o.optionText })),
      })),
    };

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question) => (
        <Question
          key={question.id}
          question={question}
          onRemove={() => handleRemoveQuestion(question.id)}
        />
      ))}
      <button type="button" onClick={handleAddQuestion}>Add Question</button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;