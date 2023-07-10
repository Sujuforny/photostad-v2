'use client'
import { uploadFile} from "@/store/features/upload-single/uploadSIngleApiSlice";
import { useDispatch } from "react-redux";

// Component code
const YourComponent = () => {
  // Call the useUploadSingleMutation hook
 
  const dispatch = useDispatch()
  // Function to handle file upload
  const handleFileUpload = async (files) => {
    dispatch(uploadFile(files))
  .unwrap()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log('error', error);
  });
  };

  return (
    <div>
      {/* File upload input */}
      <input type="file" onChange={(e) => handleFileUpload(e.target.files[0])} />
 
    </div>
  );
};

export default YourComponent;
