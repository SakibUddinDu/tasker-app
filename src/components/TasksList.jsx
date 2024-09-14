import Task from "./Task";

export default function TasksList({ data , onFavoriteClick, onDelete, onEdit}) {

	if(data.length === 0){
		return <h1 className="text-3xl">No Tasks Found! Please Add Some Tasks</h1>
	}
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              Title
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              Description
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              Tags
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Priority
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((task) => 
            <Task key={task.id} task={task}  onFavoriteClick={onFavoriteClick} onDelete={onDelete} onEdit={onEdit}/>
          )}
        </tbody>
      </table>
    </div>
  );
}
