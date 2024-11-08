import { useState } from "react";
import "../assets/Styles/Form.css";

const CForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    questionText: "",
    answer: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="main-container">
        <div className="main-title">
          <div>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Untitled Form"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              id="description"
              name="description"
              placeholder="Form description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="question-ans-container">
          <div>
            <input
              type="text"
              name="questionText"
              placeholder="Question"
              value={formData.questionText}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="answer"
              placeholder="Answer"
              value={formData.answer}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CForm;