// import React from "react";

// function MenuForm() {
//   return (
//     <div className="p-4 bg-gray-50 rounded-md">
//       <div className="mb-4">
//         <label className="block text-gray-700">Menu ID</label>
//         <input
//           type="text"
//           value="5632e09f-6e16-71e6-a70a-722afefde4e9"
//           readOnly
//           className="w-full border-gray-300 rounded p-2"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Depth</label>
//         <input
//           type="text"
//           value="3"
//           readOnly
//           className="w-full border-gray-300 rounded p-2"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Parent Data</label>
//         <input
//           type="text"
//           value="Systems"
//           readOnly
//           className="w-full border-gray-300 rounded p-2"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Name</label>
//         <input
//           type="text"
//           value="System Code"
//           className="w-full border-gray-300 rounded p-2"
//         />
//       </div>
//       <button className="bg-blue-600 text-white p-2 rounded">Save</button>
//     </div>
//   );
// }

// export default MenuForm;
import React, { useState } from 'react';

const MenuForm = ({ onCreateMenu }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateMenu({ name });
    setName(''); // Clear the input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-md p-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded p-2 mb-4 w-full"
        placeholder="Menu Name"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Create Menu
      </button>
    </form>
  );
};

export default MenuForm;
