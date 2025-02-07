import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const task = useSelector((state: RootState) => state.tasks.tasks.find(t => t.id === id));

  if (!task) {
    return <div className="p-4">Task not found</div>;
  }

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p className="text-gray-600">{task.description}</p>
      <p className="text-gray-600">Due Date: {task.dueDate}</p>
      <p className={`text-${task.status === "Completed" ? "green" : "yellow"}-500`}>{task.status}</p>
      <button onClick={() => navigate(`/edit/${task.id}`)} className="bg-blue-500 px-3 py-2 rounded text-white">
        Edit Task
      </button>
    </div>
  );
};

export default TaskDetails;
