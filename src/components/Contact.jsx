// import React from "react";

// const Contact = () => {
//   const contact_info = [
//     { logo: "mail", text: "tanishag56.2002@gmail.com" },
//     // { logo: "logo-whatsapp", text: "123 456 780" },
//     // {
//     //   logo: "location",
//     //   text: "demo location",
//     // },
//   ];
//   return (
//     <section id="contact" className="py-10 px-3 text-white">
//       <div className="text-center mt-8">
//         <h3 className="text-4xl font-semibold">
//           Contact <span className="text-cyan-600">Me</span>
//         </h3>
//         <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

//         <div
//           className="mt-16 flex md:flex-row flex-col
//          gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
//         >
//           <form className="flex flex-col flex-1 gap-5">
//             <input type="text" placeholder="Your Name" />
//             <input type="Email" placeholder="Your Email Address" />
//             <textarea placeholder="Your Message" rows={10}></textarea>
//             <button className="btn-primary w-fit">Send Message</button>
//           </form>
//           <div className="flex flex-col  gap-7 ">
//             {contact_info.map((contact, i) => (
//               <div
//                 key={i}
//                 className="flex flex-row  
//                   text-left gap-4 flex-wrap items-center"
//               >
//                 <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
//                   <ion-icon name={contact.logo}></ion-icon>
//                 </div>
//                 <p className="md:text-base text-sm  break-words">
//                   {contact.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "tanishag56.2002@gmail.com" },
    // { logo: "logo-whatsapp", text: "123 456 780" },
    // {
    //   logo: "location",
    //   text: "demo location",
    // },
  ];

  const sendEmail = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = "Contact Form Submission from " + name;
    const body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

    // Construct the mailto URL
    const mailtoLink = "mailto:recipient@example.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Open the user's email client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" id="name" />
            <input type="email" placeholder="Your Email Address" id="email" />
            <textarea placeholder="Your Message" rows={10} id="message"></textarea>
            <button className="btn-primary w-fit" onClick={sendEmail}>Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

