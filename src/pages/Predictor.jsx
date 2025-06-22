import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Predictor = () => {
  const [formData, setFormData] = useState({
     jobSatisfaction: "",
    workHours: "",
    sleepHours: "",
    socialMediaTime: "",
    screenBeforeSleep: "",
    offlineHours: "",
    age: "",
    notifications: "",
    burnoutDays: "",
    stressLevel: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://productivity-predictor-ej88.onrender.com/predict', {
        job_satisfaction_score: Number(formData.jobSatisfaction),
        work_hours_per_day: Number(formData.workHours),
        sleep_hours: Number(formData.sleepHours),
        daily_social_media_time: Number(formData.socialMediaTime),
        screen_time_before_sleep: Number(formData.screenBeforeSleep),
        weekly_offline_hours: Number(formData.offlineHours),
        age: Number(formData.age),
        number_of_notifications: Number(formData.notifications),
        days_feeling_burnout_per_month: Number(formData.burnoutDays),
        stress_level: Number(formData.stressLevel),
      });
      const prediction = response.data.prediction;
      console.log("received:",prediction)
      // Navigate to result page with prediction data
      navigate('/result', { state: { prediction } });
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white/90 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-300"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Productivity Form</h2>

//         <div className="mb-4">
//           <label className="block font-medium mb-1">Screen Time (hours/day)</label>
//           <input
//             type="number"
//             name="screenTime"
//             value={formData.screenTime}
//             onChange={handleChange}
//             className="w-full p-2 rounded-lg border border-gray-300"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block font-medium mb-1">Social Media Usage (hours/day)</label>
//           <input
//             type="number"
//             name="socialMediaUsage"
//             value={formData.socialMediaUsage}
//             onChange={handleChange}
//             className="w-full p-2 rounded-lg border border-gray-300"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block font-medium mb-1">Notifications per Day</label>
//           <input
//             type="number"
//             name="notificationsPerDay"
//             value={formData.notificationsPerDay}
//             onChange={handleChange}
//             className="w-full p-2 rounded-lg border border-gray-300"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block font-medium mb-1">Sleep Hours (per day)</label>
//           <input
//             type="number"
//             name="sleepHours"
//             value={formData.sleepHours}
//             onChange={handleChange}
//             className="w-full p-2 rounded-lg border border-gray-300"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition"
//         >
//           Predict Productivity
//         </button>
//       </form>
      
//     {/* {prediction !== null && (
//   <p>
//     You are predicted to be:{" "}
//     <span style={{ color: prediction === 1 ? "green" : "red" }}>
//       {prediction === 1 ? "Productive 🚀" : "Distracted 😓"}
//     </span>
//   </p>
// )} */}

//     </div>
   

//   );
//     return (
//   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 px-4">
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white/90 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-300"
//     >
//       <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Productivity Form</h2>

//       {/* 1. Job Satisfaction */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Job Satisfaction (0–10)</label>
//         <input
//           type="number"
//           name="jobSatisfaction"
//           value={formData.jobSatisfaction}
//           onChange={handleChange}
//           className="w-full p-2 rounded-lg border border-gray-300"
//           required
//         />
//       </div>

//       {/* 2. Work Hours */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Work Hours Per Day</label>
//         <input
//           type="number"
//           name="workHours"
//           value={formData.workHours}
//           onChange={handleChange}
//           className="w-full p-2 rounded-lg border border-gray-300"
//           required
//         />
//       </div>

//       {/* 3. Sleep Hours */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Sleep Hours (per day)</label>
//         <input
//           type="number"
//           name="sleepHours"
//           value={formData.sleepHours}
//           onChange={handleChange}
//           className="w-full p-2 rounded-lg border border-gray-300"
//           required
//         />
//       </div>

//       {/* 4. Social Media Usage */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Social Media Usage (hours/day)</label>
//         <input
//           type="number"
//           name="socialMediaTime"
//           value={formData.socialMediaTime}
//           onChange={handleChange}
//           className="w-full p-2 rounded-lg border border-gray-300"
//           required
//         />
//       </div>

//       {/* 5. Screen Time Before Sleep */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Screen Time Before Sleep (hours)</label>
//         <input
//           type="number"
//           name="screenBeforeSleep"
//           value={formData.screenBeforeSleep}
//           onChange={handleChange}
//           className="w-full p-2 rounded-lg border border-gray-300"
//           required
//         />
//       </div>

//       {/* 6. Weekly Offline Hours */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Weekly Offline Hours</label>
//         <input
//           type="number"
//           name="offlineHours"
//           value={formData.offlineHours}
//           onChange={handleChange}
//           className="w-full p-2 rounded-lg border border-gray-300"
//           required
//         />
//       </div>

//       {/* 7. Age */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Age</label>
//         <input
//           type="number"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//           className="w-full p-2 rounded-lg border border-gray-300"
//           required
//         />
//       </div>

//       {/* 8. Notifications per Day */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Notifications per Day</label>
//         <input
//           type="number"
//           name="notifications"
//           value={formData.notifications}
//           onChange={handleChange}
//           className="w-full p-2 rounded-lg border border-gray-300"
//           required
//         />
//       </div>

//       {/* 9. Burnout Days */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Days Feeling Burnout Per Month</label>
//         <input
//           type="number"
//           name="burnoutDays"
//           value={formData.burnoutDays}
//           onChange={handleChange}
//           className="w-full p-2 rounded-lg border border-gray-300"
//           required
//         />
//       </div>

//       {/* 10. Stress Level */}
//       <div className="mb-6">
//         <label className="block font-medium mb-1">Stress Level (0–10)</label>
//         <input
//           type="number"
//           name="stressLevel"
//           value={formData.stressLevel}
//           onChange={handleChange}
//           className="w-full p-2 rounded-lg border border-gray-300"
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition"
//       >
//         Predict Productivity
//       </button>
//     </form>
//   </div>
// );

//colorful
// return (
//   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 px-4 py-12">
//     <div className="backdrop-blur-md bg-white/70 border border-purple-200 shadow-2xl rounded-3xl p-10 w-full max-w-4xl">
//       <h2 className="text-4xl font-bold text-center text-purple-800 mb-8">🎯 Productivity Predictor</h2>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {[
//           ["Job Satisfaction (0–10)", "jobSatisfaction"],
//           ["Work Hours Per Day", "workHours"],
//           ["Sleep Hours", "sleepHours"],
//           ["Social Media Time (hrs/day)", "socialMediaTime"],
//           ["Screen Time Before Sleep", "screenBeforeSleep"],
//           ["Weekly Offline Hours", "offlineHours"],
//           ["Age", "age"],
//           ["Notifications per Day", "notifications"],
//           ["Burnout Days per Month", "burnoutDays"],
//           ["Stress Level (0–10)", "stressLevel"],
//         ].map(([label, name]) => (
//           <div key={name}>
//             <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
//             <input
//               type="number"
//               name={name}
//               value={formData[name]}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
//               required
//             />
//           </div>
//         ))}

//         <div className="md:col-span-2 text-center mt-4">
//           <button
//             type="submit"
//             className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold px-8 py-3 rounded-xl transition shadow-md"
//           >
//             🚀 Predict Productivity
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// );



//black

return (
  <div className="min-h-screen flex items-center justify-center bg-black px-4 py-10">
    <div className="w-full max-w-4xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl shadow-2xl p-10">
      <h2 className="text-4xl font-extrabold text-center text-white mb-10">Productivity Predictor</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          ["Job Satisfaction (0–10)", "jobSatisfaction"],
          ["Work Hours Per Day", "workHours"],
          ["Sleep Hours", "sleepHours"],
          ["Social Media Time (hrs/day)", "socialMediaTime"],
          ["Screen Time Before Sleep", "screenBeforeSleep"],
          ["Weekly Offline Hours", "offlineHours"],
          ["Age", "age"],
          ["Notifications per Day", "notifications"],
          ["Burnout Days per Month", "burnoutDays"],
          ["Stress Level (0–10)", "stressLevel"],
        ].map(([label, name]) => (
          <div key={name}>
            <label className="block text-sm font-semibold text-gray-300 mb-1">{label}</label>
            <input
              type="number"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
        ))}

        <div className="md:col-span-2 text-center mt-8">
          <button
            type="submit"
            className="bg-red-600 hover:bg-green-700 text-white text-lg font-semibold px-10 py-3 rounded-xl transition shadow-lg"
          >
             Predict Productivity
          </button>
        </div>
      </form>
    </div>
  </div>
);



};

export default Predictor;


// import React, { useState } from 'react';
// import axios from 'axios';

// const Predictor = () => {
//   const [formData, setFormData] = useState({
//     screen_time: '',
//     notifications: '',
//     social_media_time: '',
//   });

//   const [prediction, setPrediction] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/predict', {
//         screen_time: Number(formData.screen_time),
//         notifications: Number(formData.notifications),
//         social_media_time: Number(formData.social_media_time),
//       });
//       setPrediction(response.data.prediction);
//     } catch (error) {
//       console.error('Error fetching prediction:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
//       <h2>Productivity Predictor</h2>

//       <input
//         type="number"
//         name="screen_time"
//         placeholder="Screen Time (hrs)"
//         value={formData.screen_time}
//         onChange={handleChange}
//         style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
//       />

//       <input
//         type="number"
//         name="notifications"
//         placeholder="Notifications"
//         value={formData.notifications}
//         onChange={handleChange}
//         style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
//       />

//       <input
//         type="number"
//         name="social_media_time"
//         placeholder="Social Media Time (hrs)"
//         value={formData.social_media_time}
//         onChange={handleChange}
//         style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
//       />

//       <button onClick={handleSubmit} style={{ padding: '0.5rem 1rem' }}>
//         Predict
//       </button>

//       {/* ✅ Show prediction result here */}
//       {prediction !== null && (
//         <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
//           You are predicted to be:{' '}
//           <span style={{ color: prediction === 1 ? 'green' : 'red' }}>
//             {prediction === 1 ? 'Productive 🚀' : 'Distracted 😓'}
//           </span>
//         </p>
//       )}
//     </div>
//   );
// };

// export default Predictor;
