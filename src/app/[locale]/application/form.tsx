'use client'

import { t } from "i18next";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { useForm, } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import router, { useRouter } from "next/navigation";




function ApplicationForm() {

  const [loading, setLoading] = useState(false); // Initial state set to false since loading starts when form is submitted
  const [error, setError] = useState(null);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const { t } = useTranslation();

  const router = useRouter()


  const questions = [
    { label: t('label-email'), name: 'email', type: 'email', },
    { label: t('label-firstname'), name: 'firstname', type: 'text' },
    { label: t('label-lastname'), name: 'lastname', type: 'text' },
    { label: t('label-street'), name: 'street', type: 'text', optional: true },
    { label: t('label-city'), name: 'city', type: 'text', optional: true },
    { label: t('label-state'), name: 'state', type: 'text', optional: true },
    { label: t('label-postal-code'), name: 'postalCode', type: 'text', optional: true },
    { label: t('label-age'), name: 'age', type: 'text' },
    { label: t('label-ethnicity'), name: 'ethnicity', type: 'text', optional: true },
    { label: t('label-esl'), name: 'eslLearner', type: 'checkbox', optional: true },
    { label: t('label-enrolled'), name: 'enrolledInSchool', type: 'checkbox', optional: true },
    { label: t('label-school'), name: 'school', type: 'text', optional: true },
    { label: t('label-grade'), name: 'grade', type: 'text', optional: true },
    { label: t('label-dropped'), name: 'droppedOut', type: 'checkbox', optional: true },
    { label: t('label-why'), name: 'reasonForDroppingOut', type: 'textarea', optional: true },
    { label: t('label-discovery'), name: 'discoveryMethod', type: 'text', optional: true },
   
  ];



  const urlSheet = process.env.NEXT_URL_SHEETS
  const token =  process.env.NEXT_TOKEN_SHEETDB

  const { register, formState ,reset,handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();


   useEffect(() => {
    if (isSubmitSuccessful) {

      reset(); 
      setSelectedFile(null); 
    }
  }, [isSubmitSuccessful, reset]);




  const handleFileChange = (event) => {
    const { files } = event.target;
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  };



   const uploadFileToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append("upload_preset", "zno7ucqy");
     formData.append("folder", "edtechapplication");

    const response = await fetch('https://api.cloudinary.com/v1_1/dqr6k0yey/auto/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload file to Cloudinary');
    }

    const data = await response.json();
    if (data.error) {
      console.error('Cloudinary error:', data.error.message);
      throw new Error(`Cloudinary upload failed: ${data.error.message}`);
    } else {
      return data.secure_url;
    }
    
  };




  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);

   try {
      let fileUrl = '';
      if (selectedFile) {
        fileUrl = await uploadFileToCloudinary(selectedFile);
      }

      const formData = {
        ...data,
        fileUrl, // Include the Cloudinary file URL in the form data
        date: new Date().toISOString().split('T')[0],
      };


      console.log(formData)

    const response = await fetch(urlSheet, {
      method: "POST",
       mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 404) {
      const errorResponse = await response.json(); // Assuming the response is in JSON format
      console.log("Error details:", errorResponse);
    }

    const result = await response.json();

    setIsSubmittedSuccessfully(true);

     router.push('/thank-you');
   
  } catch (err) {
    setError(err);
    console.error(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
   <main className="min-h-screen p-8 py-[150px] bg-fuch">
      <h2 className="text-3xl md:text-5xl text-white font-display font-extrabold mb-20 text-center">
        {t('application-title')} <span className="text-jaune">{t('application-title-2')}</span>
      </h2>
      <div className='max-w-2xl mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
          {questions.map(({ label, name, type, optional }) => (
            <div key={name} className="flex flex-col mb-4">
              <label htmlFor={name} className="mb-2 text-sm font-bold text-white">{label}</label>
              {type === 'textarea' ? (
                <textarea
                  {...register(name, optional ? {} : { required: `${label} is required` })}
                  id={name}
                  className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows={3}
                />
              ) : type === 'checkbox' ? (
                <div className="flex items-center">
                  <input
                    {...register(name)}
                    id={name}
                    type="checkbox"
                    className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                  />
                  <label htmlFor={name} className="ml-2 block text-sm font-medium text-white"></label>
                </div>
              ) : (
                <input
                  {...register(name, {
                    required: !optional && `${label} is required`,
                    pattern: name === 'postalCode' ? { value: /^\d{5}$/, message: "Postal code must be a number with no more than 5 digits" } : undefined,
                    min: name === 'age' ? 0 : undefined,
                  })}
                  id={name}
                  type={type}
                  className="w-full px-3 py-2 mt-1 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
              {errors[name] && <p className="text-red-500">{errors[name].message as unknown as string}</p>}

            </div>
          ))}

          <div className="mb-4">
            <label htmlFor="fileUpload" className="block mb-2 text-sm font-bold text-white">
              {t('button-submit-file')}
            </label>
            <input
              id="fileUpload"
              type="file"
              onChange={handleFileChange}
              className="w-full text-sm text-gray-500"
            />
          </div>
           <button type="submit" className={`px-4 py-2 font-semibold text-lg text-white bg-pink-600 rounded-full shadow-md hover:bg-pink-700 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                {t('loading')}
              </div>
            ) : (
              t('submit-button')
            )}
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </main>
  );
}


export default ApplicationForm;
