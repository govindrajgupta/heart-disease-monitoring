import { useState } from 'react';

const Form = ({ setPrediction }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    cholesterol: '',
    bloodPressure: '',
    thalliumTest: '',
    exerciseAngina: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example prediction logic
    let risk = 'Low Risk';
    if (
      formData.age > 50 ||
      formData.cholesterol > 200 ||
      formData.bloodPressure > 130 ||
      formData.exerciseAngina === 'Yes'
    ) {
      risk = 'High Risk';
    }

    const greeting = formData.name
      ? `Hello ${formData.name},`
      : 'Hello,';
    setPrediction(`${greeting} your heart disease risk is: ${risk}`);
  };

  return (
    <div className="form-container">
      <h1>Heart Disease Prediction 🫀</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="number"
          name="cholesterol"
          placeholder="Cholesterol Level"
          value={formData.cholesterol}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="bloodPressure"
          placeholder="Blood Pressure"
          value={formData.bloodPressure}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="thalliumTest"
          placeholder="Thallium Stress Test Results"
          value={formData.thalliumTest}
          onChange={handleChange}
          required
        />
        <select
          name="exerciseAngina"
          value={formData.exerciseAngina}
          onChange={handleChange}
          required
        >
          <option value="">Exercise Induced Angina</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <button type="submit">Predict</button>
      </form>
    </div>
  );
};

export default Form;
