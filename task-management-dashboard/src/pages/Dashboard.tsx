import TaskList from "../components/TaskList";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Task Management Dashboard</h1>
      <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </Link>
      <TaskList />
    </div>
  );
};

export default Dashboard;
