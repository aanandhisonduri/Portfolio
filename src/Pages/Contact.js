// import React from 'react';
// // import { Analytics } from "@vercel/analytics/react"
// const email = 'asonduri@usc.edu';

// const Contact = () => {
//   return (
//     <div name='contact' className='w-full h-screen bg-gradient-to-b from-blue-500 to-purple-500 flex justify-center items-center p-4'>
//       <form 
//         method='POST' 
//         action="https://getform.io/f/bkkgyyeb" 
//         className='flex flex-col max-w-[600px] w-full bg-white p-8 rounded-lg shadow-lg'
//       >
//         <div className='pb-8'>
//           <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-800'>Contact</p>
//           <p className='text-gray-800 py-4'>
//             Submit the form below or shoot me an email to 
//             <a href={`mailto:${email}`} className='text-blue-600 underline ml-1'>{email}</a>
//           </p>
//         </div>
//         <input 
//           className='bg-gray-200 p-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
//           type="text" 
//           placeholder='Name' 
//           name='name' 
//         />
//         <input 
//           className='bg-gray-200 p-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
//           type="email" 
//           placeholder='Email' 
//           name='email' 
//         />
//         <textarea 
//           className='bg-gray-200 p-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
//           name="message" 
//           rows="10" 
//           placeholder='Message'
//         ></textarea>
//         <button 
//           className='text-white bg-blue-500 border-2 border-blue-500 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg transition duration-300 ease-in-out'
//         >
//           Let's Connect
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Contact;

import React from 'react';
// import { Analytics } from "@vercel/analytics/react"
const email = 'asonduri@usc.edu';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-white flex justify-center items-center p-4'>
      <form 
        method='POST' 
        action="https://getform.io/f/bkkgyyeb" 
        className='flex flex-col max-w-[600px] w-full bg-gray-100 p-8 rounded-lg shadow-md'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold text-gray-800'>Contact</p>
          <p className='text-gray-600 py-4'>
            Submit the form below or shoot me an email to 
            <a href={`mailto:${email}`} className='text-blue-500 underline ml-1'>{email}</a>
          </p>
        </div>
        <input 
          className='bg-white p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
          type="text" 
          placeholder='Name' 
          name='name' 
        />
        <input 
          className='bg-white p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
          type="email" 
          placeholder='Email' 
          name='email' 
        />
        <textarea 
          className='bg-white p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
          name="message" 
          rows="10" 
          placeholder='Message'
        ></textarea>
        <button 
          className='text-white bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded-lg transition duration-300 ease-in-out'
        >
          Let's Connect
        </button>
      </form>
    </div>
  );
}

export default Contact;
