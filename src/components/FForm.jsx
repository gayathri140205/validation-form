
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../assets/styles/Form.css";


// Ensure this imports your CSS file with the button styles

const FForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    questions: [
      {
        questionText: "",
        type: "text",
        answer: "",
        options: [""], // For MCQ options
      },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      questionText: "",
      type: "text",
      answer: "",
      options: [""],
    };
    setFormData({
      ...formData,
      questions: [...formData.questions, newQuestion],
    });
  };

  const handleQuestionChange = (e, questionIndex) => {
    const updatedQuestions = [...formData.questions];
    const { name, value } = e.target;
    updatedQuestions[questionIndex][name] = value;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleAddOption = (questionIndex) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options.push("");
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options[optionIndex] = e.target.value;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleDeleteQuestion = (questionIndex) => {
    const updatedQuestions = formData.questions.filter((_, index) => index !== questionIndex);
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleCopyQuestion = (questionIndex) => {
    const questionCopy = { ...formData.questions[questionIndex] };
    setFormData({
      ...formData,
      questions: [...formData.questions, questionCopy],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="main-container">
        <div className="main-title">
          <input
            type="text"
            name="title"
            placeholder="Untitled Form"
            value={formData.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Form description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="question-ans-container">
          {formData.questions.map((question, questionIndex) => (
            <div key={questionIndex} className="question-block">
              <input
                type="text"
                name="questionText"
                placeholder="Question"
                value={question.questionText}
                onChange={(e) => handleQuestionChange(e, questionIndex)}
              />
              <select
                name="type"
                value={question.type}
                onChange={(e) => handleQuestionChange(e, questionIndex)}
              >
                <option value="text">Short Answer</option>
                <option value="mcq">Multiple Choice</option>
              </select>

              {question.type === "mcq" && (
                <div className="options-container">
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <input
                        type="text"
                        placeholder={`Option ${optionIndex + 1}`}
                        value={option}
                        onChange={(e) => handleOptionChange(e, questionIndex, optionIndex)}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleAddOption(questionIndex)}
                    className="spaced-button"
                  >
                    Add Option
                  </button>
                </div>
              )}

              <div className="button-group">
                <button
                  type="button"
                  onClick={() => handleCopyQuestion(questionIndex)}
                  className="spaced-button"
                >
                  Copy
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(questionIndex)}
                  className="spaced-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="button-group">
        <button type="button" onClick={handleAddQuestion} className="spaced-button">
          Add Question
        </button>
        <button type="submit" className="spaced-button">Submit</button>
      </div>
    </form>
  );
};

export default FForm;
