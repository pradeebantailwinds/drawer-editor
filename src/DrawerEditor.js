// import React, { useState, useEffect } from 'react';
// import { Drawer, Button, message } from 'antd';
// import Editor from '@monaco-editor/react';
// import yaml from 'yaml';

// const DrawerEditor = ({ visible, onClose, base64Content }) => {
//   const [content, setContent] = useState('');
//   const [errors, setErrors] = useState([]);

//   useEffect(() => {
//     if (base64Content) {
//       try {
//         const decodedContent = atob(base64Content); // Decode Base64 content
//         setContent(decodedContent);
//       } catch (error) {
//         message.error('Failed to decode Base64 content.');
//       }
//     }
//   }, [base64Content]);

//   const handleChange = (newValue) => {
//     setContent(newValue);
//     try {
//       yaml.parse(newValue); // Attempt to parse YAML to check for syntax errors
//       setErrors([]); // Clear previous errors if parsing is successful
//     } catch (error) {
//       if (error.mark) {
//         const yamlError = {
//           message: error.message,
//         };
//         delete yamlError.line
//         delete yamlError.column
//         setErrors([yamlError]);
//       } else {
//         // If error.mark is undefined, it means there's an unexpected parsing error
//         setErrors([{ message: error.message }]);
//       }
//     }
//   };
  

//   const handleSave = () => {
//     if (errors.length > 0) {
//       message.error('YAML has syntax errors. Please fix them before saving.');
//       return;
//     }

//     console.log('Content:', content);
//     onClose(); // Close the drawer after saving
//   };

//   const handleCancel = () => {
//     onClose(); // Close the drawer without saving
//   };

//   return (
//     <Drawer
//       title="Edit values.yaml"
//       placement="right"
//       closable={false}
//       onClose={handleCancel}
//       visible={visible}
//       width={600}
//     >
//       <Editor
//         height="400px"
//         defaultLanguage="yaml"
//         value={content}
//         onChange={handleChange}
//         onValidate={(markers) => {
//           setErrors(
//             markers
//               .filter((marker) => marker.severity === 8) // 8 is the severity for error
//               .map((marker) => ({
//                 message: marker.message,
//                 line: marker.startLineNumber,
//                 column: marker.startColumn,
//               }))
//           );
//         }}
//         options={{
//           minimap: { enabled: false },
//         }}
//       />
//       <div style={{ marginTop: '20px', textAlign: 'right' }}>
//         <Button style={{ marginRight: '10px' }} onClick={handleCancel}>
//           Cancel
//         </Button>
//         <Button type="primary" onClick={handleSave}>
//           Save
//         </Button>
//       </div>
//       {errors.length > 0 && (
//         <div style={{ color: 'red', marginTop: '10px' }}>
//           {errors.map((error, index) => (
//             <p key={index}>
//               Error: {error.message} 
//             </p>
//           ))}
//         </div>
//       )}
//     </Drawer>
//   );
// };

// export default DrawerEditor;


import React, { useState, useEffect } from 'react';
import { Drawer, Button, message } from 'antd';
import Editor from '@monaco-editor/react';
import yaml from 'yaml';

const DrawerEditor = ({ visible, onClose, base64Content }) => {
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (base64Content) {
      try {
        const decodedContent = atob(base64Content); // Decode Base64 content
        setContent(decodedContent);
      } catch (error) {
        message.error('Failed to decode Base64 content.');
      }
    }
  }, [base64Content]);

  const handleChange = (newValue) => {
    setContent(newValue);
    try {
      yaml.parse(newValue); // Attempt to parse YAML to check for syntax errors
      setErrors([]); // Clear previous errors if parsing is successful
    } catch (error) {
      if (error.source) {
        const lines = error.source.split('\n');
        const lineOffset = lines.findIndex(line => line.trim() === newValue.trim()); // Find the offset due to empty lines
        const yamlError = {
          message: error.message,
          line: error.range.start.line + lineOffset + 1,
          column: error.range.start.character + 1,
        };
        setErrors([yamlError]);
      } else {
        setErrors([{ message: error.message, line: '', column: '' }]);
      }
    }
  };

  const handleSave = () => {
    if (errors.length > 0) {
      message.error('YAML has syntax errors. Please fix them before saving.');
      return;
    }

    console.log('Content:', content);
    onClose(); // Close the drawer after saving
  };

  const handleCancel = () => {
    onClose(); // Close the drawer without saving
  };

  return (
    <Drawer
      title="Edit values.yaml"
      placement="right"
      closable={false}
      onClose={handleCancel}
      visible={visible}
      width={600}
    >
      <Editor
        height="400px"
        defaultLanguage="yaml"
        value={content}
        onChange={handleChange}
        options={{
          minimap: { enabled: false },
        }}
      />
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <Button style={{ marginRight: '10px' }} onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
      {errors.length > 0 && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          {errors.map((error, index) => (
            <p key={index}>
              <strong>Error:</strong> {error.message}.
            </p>
          ))}
        </div>
      )}
    </Drawer>
  );
};

export default DrawerEditor;
