function TaskList() {
  const tasks = ['Позавтракать', 'Проверить почту', 'Сделать зарядку', 'Выпить стакан воды'];

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  );
}

export default TaskList;