// import React from "react";
// import Sidebar from "./components/organisms/sideBar.js";
// import Header from "./components/molecules/header.js";
// import MenuTree from "./components/molecules/menuTree.jsx";
// import MenuForm from "./components/molecules/menuForm.jsx";

// function App() {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />

//       <div className="flex-1 flex flex-col bg-gray-100">
//         <Header />

//         <div className="flex p-4 space-x-4">
//           <div className="w-1/3 bg-white rounded-md shadow-md">
//             <MenuTree />
//           </div>

//           <div className="w-2/3 bg-white rounded-md shadow-md p-4">
//             <MenuForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Sidebar from './components/organisms/sideBar.js';
import MenuManager from './components/organisms/menuManager.js';

function App() {
  return (
    <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray overflow-y-auto">
        <MenuManager />
      </div>
    </div>
  );
}

export default App;


