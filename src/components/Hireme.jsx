// import React from "react";
// import hireMe from "../assets/images/hireMe.png";
// const Hireme = () => {
//   return (
//     <section id="hireme" className="py-10 px-3 text-white">
//       <div className="text-center">
//         <h3 className="text-4xl font-semibold">
//           Hire <span className="text-cyan-600">Me</span>
//         </h3>
//         <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
//       </div>
//       <div className=" bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[10rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
//         <div>
//           <h2 className="text-2xl font-semibold">
//             Web UI Design
//           </h2>
//           <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
//           This includes the frontend; designing responsive UI and mockups for web applications as well as mobile apps.
//           </p>
//           {/* <button className="btn-primary mt-10">Say Hello</button> */}
//         </div>
     
      
//       </div>
//     </section>
//   );
// };

// export default Hireme;
import React from "react";


const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Services</p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-2 mt-24 flex flex-col gap-6 items-center">
          <h2 className="text-2xl font-semibold">Web UI Design</h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            This includes the frontend; designing responsive UI and mockups for web applications as well as mobile apps.
          </p>
          {/* <button className="btn-primary mt-10">Say Hello</button> */}
        </div>

        <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-2 mt-24 flex flex-col gap-6 items-center">
          <h2 className="text-2xl font-semibold">Web development</h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
          This includes the backend; creating and working with API, databases and authentication
          </p>
          {/* <button className="btn-primary mt-10">Say Hello</button> */}
        </div>
      </div>
    </section>
  );
};

export default Hireme;



