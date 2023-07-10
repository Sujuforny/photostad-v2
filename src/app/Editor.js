"use client";
import React, { useEffect, useRef, useState } from "react";

function Editor({ onChange, editorLoaded, name, data}) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const [editorData, setEditorData] = useState("");

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);
  console.log(editorData, "editorData");

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          config={{
            ckfinder: {
              // Upload the images to the server using the CKFinder QuickUpload command
              // You have to change this address to your server that has the ckfinder php connector
              uploadUrl: " https://photostad-api.istad.co/api/v1/files", //Enter your upload url
            },
          }}
          //create upload adapter to send image to server in Ckeditor
        onReady={(editor)=>{
          editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new MyUploadAdapter(loader);
          };
          console.log('Editor is ready to use!', editor);
        }}


       
          data={data}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data })
            setEditorData(data);
            console.log(data, "===> data editor");
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}

// custom upload adapter

class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then((file) => new Promise((resolve, reject) => {
      // Your upload logic here
      // Example using fetch:
      const formData = new FormData();
      formData.append('file', file);
  
      fetch('https://photostad-api.istad.co/api/v1/files', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            console.log(data, "data upload image");
            const url = data?.data?.url;
            const cleanUrl = url.replace(/\\/g,'')
            resolve({ default: cleanUrl });
          });
        } else {
          reject(response.statusText);
        }
        console.log(response, "response upload image");
      })
      .catch(error => {
        reject(error);
        console.log(error, "error upload image");
      });
    }));
  }

  abort() {
    // Abort upload logic here
  }
}



// ClassicEditor.builtinPlugins = [
//   // ...
//   MyCustomUploadAdapterPlugin,
//   // ...
// ];

export default Editor;
