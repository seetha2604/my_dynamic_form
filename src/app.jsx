import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormGenerator from './components/FormGenerator';

const App = () => {
  const [schema, setSchema] = useState({
    formTitle: "Simple Form",
    fields: [
      { id: "name", type: "text", label: "Name", required: true },
      { id: "email", type: "email", label: "Email", required: true },
    ],
  });

  return (
    <div className="app">
      <h1>{schema.formTitle}</h1>
      <div className="editor-container">
        <JSONEditor schema={schema} setSchema={setSchema} />
      </div>
      <div className="form-container">
        <FormGenerator schema={schema} />
      </div>
    </div>
  );
};

export default App;
