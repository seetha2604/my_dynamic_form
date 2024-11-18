import React from 'react';

const FormGenerator = ({ schema }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    console.log("Submitted Data:", formData);
    alert("Form submitted!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {schema.fields.map((field) => (
          <div key={field.id} className="form-field">
            <label htmlFor={field.id}>{field.label}</label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              required={field.required}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormGenerator;
