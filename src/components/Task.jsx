import Tag from "./Tag";
import { FaStar } from "react-icons/fa6";

export default function Task({ task, onFavoriteClick, onDelete, onEdit }) {
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <button onClick={()=>onFavoriteClick(task.id)}>
          {task.isFavorite ? <FaStar color="#f5bf42" /> : <FaStar />}
        </button>
      </td>
      <td>{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task?.tags?.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
        </ul>
      </td>
      <td className="text-center">{task.priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button className="text-red-500" onClick={()=>onDelete(task.id)}>Delete</button>
          <button className="text-blue-500" onClick={()=>onEdit(task)}>Edit</button>
        </div>
      </td>
    </tr>
  );
}
