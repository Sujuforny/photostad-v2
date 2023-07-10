"use client";
import { Formik, Form, Field, useField, useFormikContext } from "formik";
import React, { useState } from "react";
import { useSession} from "next-auth/react";
import { useGetUserQuery, useUpdateProfileMutation } from "@/store/features/user/userApiSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/features/auth/authSlice";
import { useUploadSingleMutation } from "@/store/features/upload-single/uploadSIngleApiSlice";

export default function Page() {
  const [uploadSingle] =  useUploadSingleMutation()
  const [ updateProfile,{isLoading}] = useUpdateProfileMutation()
  const {data:user} = useSelector(selectCurrentUser)
  const initialValues = {
    lastName:user?.givenName, 
    firstName:user?.familyName, 
    gender: user?.gender,
    biography: user?.biography,
    image: user?.avatarUrl,
  };

  const handleSubmit =async (values) => {
    // Handle form submission
    console.log("values",values);
    try{
    const dataFile = await uploadSingle(values.file).unwrap()
    console.log(dataFile);
    }catch(e){
      console.log("Error uploading", e);
    }

    const uuid = user?.uuid
    const {firstName:familyName, lastName:givenName,gender,biography} = values
    const data = await updateProfile(uuid,{familyName,givenName,gender,biography})
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow-md w-[90%] mx-auto p-5 rounded-[16px]">
      {/* Page content here */}
      <h1 className="font-semibold max-sm:hidden dark:text-white text-[32px]">
        Profile Setting
      </h1>
      <h2 className="mt-5 font-light dark:text-white">Profile Information</h2>
      <Formik 
      enableReinitialize
      initialValues={initialValues} 
      onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form className="flex flex-wrap mt-5">
            <div className="max-sm:w-full">
              <div className="mb-6">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <Field
                  placeholder="Enter your last name"
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="shadow-sm bg-[whitesmoke] w-full text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-400 dark:focus:border-red-400 dark:shadow-sm-light"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <Field
                  placeholder="Enter your first name"
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="shadow-sm bg-[whitesmoke] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                />
              </div>
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select your gender
              </label>
              <Field
                as="select"
                id="gender"
                name="gender"
                className="bg-[whitesmoke] md:mb-3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
            </div>
            <div className="max-sm:w-full lg:ms-32">
              <div className="pf-user mt-5">
                <Field
                  as={FileInput}
                  label="Profile Image"
                  name="image"
                  setFieldValue={setFieldValue}
                />
              </div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Bio
              </label>
              <Field
                as="textarea"
                name="biography"
                className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-400 h-28 dark:focus:border-red-400 dark:shadow-sm-light bg-[whitesmoke] w-full md:w-[400px] rounded-[16px]"
              />
            </div>
            <button
              type="submit"
              className="mainround p-2.5 hover:text-white hover:shadow-2xl hover:shadow-blue-600 hover:bg-[#23c483] hover:-translate-y-2 transform transition-all duration-300 ease-in-out bg-[#E85854] hidden md:block text-white font-[35px] text-center py-2 rounded-[16px] text-[17px]"
            >
              Save Changes
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const FileInput = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    setPreviewImage(URL.createObjectURL(file));
    setFieldValue(props.name, file);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <input
          type="file"
          id={props.id || props.name}
          name={props.name}
          onChange={handleFileChange}
          className="hidden"
        />
        {previewImage ? (
          <img
            src={previewImage}
            alt="Preview"
            className="w-36 mb-2 h-36 object-cover rounded-full"
          />
        ) : (
          <img
            src={"https://flxt.tmsimg.com/assets/235135_v9_bb.jpg"
            }
            alt="avatar"
            className="w-36 mb-2 h-36 object-cover rounded-full"
          />
        )}
        <label
          htmlFor={props.id || props.name}
          className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-200 bg-opacity-50 cursor-pointer rounded-full"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </label>
      </div>
      <label
        htmlFor={props.id || props.name}
        className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm">{meta.error}</div>
      )}
    </div>
  );
};