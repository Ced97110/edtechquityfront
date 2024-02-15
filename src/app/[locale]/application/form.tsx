'use client'

import { t } from "i18next";
import { Metadata } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";





function ApplicationForm() {

  const [loading, setLoading] = useState(false); // Initial state set to false since loading starts when form is submitted
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const { t } = useTranslation();


  const questions = [
    { label: t('label-email'), name: 'email', type: 'email', },
    { label: t('label-firstname'), name: 'firstname', type: 'text' },
    { label: t('label-lastname'), name: 'lastname', type: 'text' },
    { label: t('label-street'), name: 'street', type: 'text', optional: true },
    { label: t('label-city'), name: 'city', type: 'text', optional: true },
    { label: t('label-state'), name: 'state', type: 'text', optional: true },
    { label: t('label-postal-code'), name: 'postalCode', type: 'text', optional: true },
    { label: t('label-age'), name: 'age', type: 'number' },
    { label: t('label-ethnicity'), name: 'ethnicity', type: 'text', optional: true },
    { label: t('label-esl'), name: 'eslLearner', type: 'checkbox', optional: true },
    { label: t('label-enrolled'), name: 'enrolledInSchool', type: 'checkbox', optional: true },
    { label: t('label-school'), name: 'school', type: 'text', optional: true },
    { label: t('label-grade'), name: 'grade', type: 'text', optional: true },
    { label: t('label-dropped'), name: 'droppedOut', type: 'checkbox', optional: true },
    { label: t('label-why'), name: 'reasonForDroppingOut', type: 'text', optional: true },
    { label: t('label-participation'), name: 'reasonForParticipation', type: 'textarea', optional: true },
    { label: t('label-discovery'), name: 'discoveryMethod', type: 'text', optional: true },
  ];



  const urlSheet = 'https://sheet.best/api/sheets/fa587c42-ff3b-4b64-8383-ed470c603cb9';

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFileChange = (event) => {
    const { files } = event.target;
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const onSubmit = async (data) => {
  setLoading(true);
  setError(null);

  try {
    // Convert form data to JSON, omitting 'submissionFile' if it's not handled here
    const jsonData = Object.fromEntries(Object.entries(data).filter(([key]) => key !== 'submissionFile'));

    const currentDate = new Date().toISOString().split('T')[0]; 

    jsonData['date'] = currentDate;

    console.log(jsonData)

    if (selectedFile) {
      // Handle file separately, e.g., by uploading it first and adding a reference to jsonData
    }

    const response = await fetch(urlSheet, {
      method: "POST",
       mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });

    if (response.status === 404) {
      const errorResponse = await response.json(); // Assuming the response is in JSON format
      console.log("Error details:", errorResponse);
    }

    const result = await response.json();
    console.log(result);
  } catch (err) {
    setError(err);
    console.error(err.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <main className="min-h-screen p-8 py-[150px] bg-fuch">
      <h2 className="text-3xl md:text-5xl text-white font-display font-extrabold mb-6 text-center">{t('application-title')} <span className="text-jaune">{t('application-title-2')}</span></h2>
      <div className='max-w-2xl mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
          {questions.map(({ label, name, type, optional }) => (
            <div key={name}>
              <label htmlFor={name} className="block mb-1 p-4 font-semibold text-white">{label}</label>
              {type !== 'textarea' && type !== 'file' && type !== 'checkbox' ? (
                <input
                  type={type}
                  {...register(name, { required: !optional })}
                  className="w-full border-gray-300 shadow-sm rounded-md p-2"
                />
              ) : type === 'checkbox' ? (
                <input
                  type="checkbox"
                  {...register(name)}
                  className="w-6 h-6 border-gray-300 shadow-sm rounded-md p-2"
                />
              ) : (
                <textarea
                  {...register(name, { required: !optional })}
                  rows={4}
                  className="w-full border-gray-300 shadow-sm rounded-md p-2 text-black"
                ></textarea>
              )}
              {errors[name] && <span className="text-red-500">This field is required</span>}
            </div>
          ))}
          <button type="submit" className="mt-8 inline-block bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-full shadow-md font-semibold text-lg cursor-pointer transition duration-300 font-display">
           {t('submit-button')}
          </button>
        </form>
        {loading && <p>Submitting your application...</p>}
        {error && <p className="text-red-500">An error occurred: {error.message}</p>}
      </div>
    </main>
  );
}


export default ApplicationForm;
