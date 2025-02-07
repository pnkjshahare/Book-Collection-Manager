import { Provider } from "react-redux";
import { store } from "./redux/store";
import AppRoutes from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;


// import React from 'react';
// import { useState } from 'react';
// import { Plus, Search, CheckCircle2, Clock, ListTodo } from 'lucide-react';

// const TaskDashboard = () => {
//   const [filter, setFilter] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');

//   // Sample tasks data
//   const tasks = [
//     { 
//       id: 1, 
//       title: "Complete Project Proposal", 
//       description: "Draft and finalize the Q1 project proposal document",
//       status: "pending",
//       dueDate: "2025-02-10",
//       priority: "high"
//     },
//     { 
//       id: 2, 
//       title: "Review Code Changes", 
//       description: "Review pull requests for the new feature implementation",
//       status: "in-progress",
//       dueDate: "2025-02-07",
//       priority: "medium"
//     },
//     { 
//       id: 3, 
//       title: "Update Documentation", 
//       description: "Update API documentation with new endpoints",
//       status: "completed",
//       dueDate: "2025-02-05",
//       priority: "low"
//     }
//   ];

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'completed':
//         return 'bg-green-100 text-green-800';
//       case 'in-progress':
//         return 'bg-blue-100 text-blue-800';
//       case 'pending':
//         return 'bg-yellow-100 text-yellow-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case 'high':
//         return 'text-red-500';
//       case 'medium':
//         return 'text-yellow-500';
//       case 'low':
//         return 'text-green-500';
//       default:
//         return 'text-gray-500';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Task Dashboard</h1>
//           <p className="mt-2 text-sm text-gray-600">Manage and track your daily tasks efficiently</p>
//         </div>

//         {/* Actions Bar */}
//         <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//           <div className="relative flex-1 max-w-md">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//             <input
//               type="text"
//               placeholder="Search tasks..."
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//           <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//             <Plus className="h-5 w-5 mr-2" />
//             Add New Task
//           </button>
//         </div>

//         {/* Filters */}
//         <div className="mb-6 flex flex-wrap gap-2">
//           <button
//             onClick={() => setFilter('all')}
//             className={`px-4 py-2 rounded-lg text-sm font-medium ${
//               filter === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-white text-gray-600 hover:bg-gray-50'
//             }`}
//           >
//             <ListTodo className="inline-block h-4 w-4 mr-2" />
//             All Tasks
//           </button>
//           <button
//             onClick={() => setFilter('pending')}
//             className={`px-4 py-2 rounded-lg text-sm font-medium ${
//               filter === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-white text-gray-600 hover:bg-gray-50'
//             }`}
//           >
//             <Clock className="inline-block h-4 w-4 mr-2" />
//             Pending
//           </button>
//           <button
//             onClick={() => setFilter('completed')}
//             className={`px-4 py-2 rounded-lg text-sm font-medium ${
//               filter === 'completed' ? 'bg-green-100 text-green-800' : 'bg-white text-gray-600 hover:bg-gray-50'
//             }`}
//           >
//             <CheckCircle2 className="inline-block h-4 w-4 mr-2" />
//             Completed
//           </button>
//         </div>

//         {/* Tasks Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {tasks.map((task) => (
//             <div
//               key={task.id}
//               className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
//             >
//               <div className="flex justify-between items-start mb-4">
//                 <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
//                 <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
//                   {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
//                 </span>
//               </div>
//               <p className="text-gray-600 text-sm mb-4">{task.description}</p>
//               <div className="flex justify-between items-center">
//                 <div className="text-sm text-gray-500">
//                   Due: {new Date(task.dueDate).toLocaleDateString()}
//                 </div>
//                 <div className={`text-sm font-medium ${getPriorityColor(task.priority)}`}>
//                   {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskDashboard;