export function CardTask({ task, onDelete, onCheck }) {
  return (
    <div>
      {task.description}
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onCheck(task)}
      />
      <button onClick={() => onDelete(task.objectId)}>X</button>
    </div>
  );
}