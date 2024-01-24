import "./task-column.css";
import TaskCard from "../task-card/TaskCard";

function TaskColumn(props) {
  const { title, color, data } = props;

  return (
    <div className="task-column">
      <h3 className="task-column-tit" style={{ backgroundColor: color }}>
        {title}
      </h3>
      <div className="task-column-body">
        {data.map((item) => (
          <TaskCard
            key={item.title}
            title={item.title}
            date={item.date}
            statusId={item.statusId}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskColumn;
