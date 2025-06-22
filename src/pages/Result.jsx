//colorful

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Result = () => {
//   const { state } = useLocation();
//   const prediction = state?.prediction;
//   const navigate = useNavigate();

//   const isProductive = prediction === 1;

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 px-4">
//       <div className="relative p-1 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg">
//         <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md w-full">
//           <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
//            Prediction
//           </h1>

//           <div className="mt-4 text-2xl font-semibold text-gray-700">
//             You are predicted to be:
//             <div
//               className={`mt-4 text-3xl font-bold ${
//                 isProductive ? "text-green-600" : "text-red-500"
//               }`}
//             >
//               {isProductive ? "Productive " : "Distracted "}
//             </div>
//           </div>

//           <p className="text-gray-500 mt-4">
//             {isProductive
//               ? "Great job! Keep up the focused work and stay consistent. 💪"
//               : "No worries! Consider reducing screen time and improving sleep for better focus. 📵💤"}
//           </p>

//           <button
//             onClick={() => navigate("/")}
//             className="mt-8 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Result;


//black
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const prediction = state?.prediction;
  const navigate = useNavigate();
  const isProductive = prediction === 1;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-10">
      <div className="w-full max-w-xl backdrop-blur-md bg-white/10 border border-blue-800 rounded-3xl shadow-2xl p-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-6 text-purple-400 drop-shadow-md">
          Productivity Prediction
        </h1>

        <div className="mt-6 text-2xl font-medium text-gray-300">
          You are predicted to be:
        </div>

        <div
          className={`mt-4 text-4xl font-extrabold ${
            isProductive ? "text-green-400" : "text-red-400"
          } drop-shadow-lg`}
        >
          {isProductive ? "Productive" : "Distracted"}
        </div>

        <p className="mt-6 text-gray-400 text-md leading-relaxed">
          {isProductive
            ? "Awesome! Keep up the focused habits and maintain a balanced digital routine."
            : "No stress! Small changes in your screen habits and rest can boost your focus a lot."}
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-10 px-6 py-3 bg-green-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-xl transition duration-300 shadow-md"
        >
           Try Again
        </button>
      </div>
    </div>
  );
};

export default Result;
