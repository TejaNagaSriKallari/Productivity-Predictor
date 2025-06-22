//black
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-black text-white">
//       {/* Header */}
//       <header className="w-full px-6 py-4 bg-blue border-b-4 border-gray-700 flex justify-between items-center">
//   <h1 className="text-4xl font-bold  text-extrabold text-red">Productivity Predictor</h1>
// </header>


//       {/* Hero Section */}
//       {/* <section className="flex flex-col items-center justify-center py-24 px-4 text-center">
//         <div className="bg-white/80 rounded-2xl shadow-xl p-10 border border-gray-300 max-w-2xl w-full">
//           <h2 className="text-4xl font-bold mb-4">Understand Your Digital Habits</h2>
//           <p className="text-lg mb-6">
//             Discover how your screen time, notifications, and social media habits impact your productivity.
//           </p>
//           <button
//             className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition"
//             onClick={() => navigate("/predictor")}
//           >
//             Get Started
//           </button>
//         </div>
//       </section> */}
//       <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
//         <h2 className="text-4xl font-bold mb-4 text-emerald-300">Understand Your Digital Habits</h2>
//         <p className="text-lg text-blue-200 mb-6 max-w-xl">
//           Discover how your screen time, notifications, and social media habits impact your productivity.
//         </p>
//         <button
//           className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition"
//           onClick={() => navigate("/predictor")}
//         >
//           Get Started
//         </button>
//       </main>

//       {/* Footer */}
//       <footer className="text-center text-gray-500">
//         © 2025 Productivity Predictor.
//       </footer>
//     </div>
//   );
// };

// export default Home;



//colorful
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-100 via-green-100 to-green-100 text-blue">
//       {/* Header */}
//       <header className="w-full px-6 py-4 bg-blue border-b-4 border-white-400 flex justify-between items-center">
//   <h1 className="text-4xl font-bold  text-extrabold text-red">Productivity Predictor</h1>
// </header>


//       {/* Hero Section * */}
//       {/* {/* <section className="flex flex-col items-center justify-center py-24 px-4 text-center">
//         <div className="bg-white/80 rounded-2xl shadow-xl p-10 border border-gray-300 max-w-2xl w-full">
//           <h2 className="text-4xl font-bold mb-4">Understand Your Digital Habits</h2>
//           <p className="text-lg mb-6">
//             Discover how your screen time, notifications, and social media habits impact your productivity.
//           </p>
//           <button
//             className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition"
//             onClick={() => navigate("/predictor")}
//           >
//             Get Started
//           </button>
//         </div>
//       </section> */}
//       <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
//         <h2 className="text-4xl font-bold mb-4">Understand Your Digital Habits</h2>
//         <p className="text-lg text-gray-600 mb-6 max-w-xl">
//           Discover how your screen time, notifications, and social media habits impact your productivity.
//         </p>
//         <button
//           className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
//           onClick={() => navigate("/predictor")}
//         >
//           Get Started
//         </button>
//       </main>

//       {/* Footer */}
//       <footer className="text-center text-gray-500 py-4 border-t">
//         © 2025 Productivity Predictor.
//       </footer>
//     </div>
//   );
// };

// export default Home;


//black with image

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white">
      {/* Header */}
      <header className="w-full px-6 py-4 bg-gray-900 border-b-4 border-gray-700 flex justify-between items-center">
        <h1 className="text-4xl font-extrabold text-blue-300">Productivity Predictor</h1>
      </header>

      {/* Hero Section */}
       <main className="flex-1 flex items-center justify-center px-6 py-12">
  <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
    {/* Left: Text */}
    <div className="text-center md:text-left">
      <h2 className="text-4xl font-bold mb-4 text-emerald-300">Understand Your Digital Habits</h2>
      <p className="text-lg text-blue-200 mb-6 max-w-md">
        Discover how your screen time, notifications, and social media habits impact your productivity.
      </p>
      <button
        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition"
        onClick={() => navigate("/predictor")}
      >
        Get Started
      </button>
    </div>

    {/* Right: Image */}
    <div className="flex justify-center">
      <img
        src="/SocioProd.png"
        alt="Socio Productivity"
        className="w-full max-w-sm rounded-2xl shadow-lg border border-red-700"
      />
    </div>
  </div>
</main>


      {/* Footer */}
      <footer className="text-center text-gray-500 py-4">
        © 2025 Productivity Predictor.
      </footer>
    </div>
  );
};

export default Home;
