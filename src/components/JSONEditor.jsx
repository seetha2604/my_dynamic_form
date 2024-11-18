import React, { useState } from 'react';

const JSONEditor = ({ schema, setSchema }) => {
  const [json, setJson] = useState(JSON.stringify(schema, null, 2));
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setJson(value);
    try {
      const parsed = JSON.parse(value);
      setSchema(parsed);
      setError("");
    } catch (err) {
      setError("Invalid JSON format.");
    }
  };

  return (
    <div>
      <h3>JSON Editor</h3>
      <textarea
        value={json}
        onChange={handleChange}
        rows={20}
        cols={50}
        className="json-editor"
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default JSONEditor;
