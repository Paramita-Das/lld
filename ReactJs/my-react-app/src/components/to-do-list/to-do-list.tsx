import  {useState, useEffect, useRef} from "react";
import './to-do-list.css'

type taskInterface = {
    id: number,
    todo: string,
    completed: boolean,
    userId: number
};

const ToDoList = () => {
    const [tasks, setTasks] = useState<taskInterface[]>([]);
    const taskInput = useRef<HTMLInputElement>(null);

    // editing state
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingText, setEditingText] = useState<string>('');
    const editInputRef = useRef<HTMLInputElement | null>(null);
    const [mode, setMode] = useState<"view" | "edit">("view");

    useEffect(() => {
        const fetchTodos = async () => {
           try {
            const res = await fetch("https://dummyjson.com/todos");
            if (!res.ok) throw new Error(res.statusText);
            const data = await res.json();
            setTasks(data.todos as taskInterface[]);
           } catch (error) {
               console.error("Error fetching todo items:", error);
           }
        };

        fetchTodos();
    }, []);

    // focus the edit input when editingId changes
    useEffect(() => {
      if (editingId !== null) {
        editInputRef.current?.focus();
        editInputRef.current?.select();
      }
    }, [editingId]);

    const onClickAdd = (item: string | undefined) => {
        const value = (item || '').trim();
        if (!value) return;
        const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
        setTasks([{ id: newId, todo: value, completed: false, userId: Math.random() }, ...tasks]);
        if (taskInput.current) {
          taskInput.current.value = '';
        }
    }

    const onClickToggle =( id: number) => {
     const updateTaskItem = tasks.map(task => {
        return (task.id === id) 
            ? { ...task, completed: !task.completed } : task;
     });
     setTasks(updateTaskItem);
    };

    const startEditing = (taskId: number) => {
      const task = tasks.find(t => t.id === taskId);
      if (!task) return;
      setEditingId(taskId);
      setEditingText(task.todo);
    };

    const saveEdit = () => {
      if (editingId === null) return;
      const value = editingText.trim();
      setTasks(prev => prev.map(t => t.id === editingId ? { ...t, todo: value } : t));
      setEditingId(null);
      setEditingText('');
    };

    const cancelEdit = () => {
      setEditingId(null);
      setEditingText('');
    };

    const onClickMode = () => {
      setMode((prev) => prev === "view" ? "edit" : "view");
    }

  return (
    <div>
      <h1>To Do List</h1>
      <h2 onClick={onClickMode} style={{ cursor: 'pointer', userSelect: 'none' }}>{mode === "view" ? "View" : "Edit" } Mode</h2>
      <div className="input-container">
        {mode === "edit" && (
          <>
            <input type="text" placeholder="Add a new task" ref={taskInput} />
            <button onClick={() => onClickAdd(taskInput.current?.value)} className="add-btn">Add</button>
          </>
        )}
      </div> 
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          {mode === "edit" &&editingId === task.id ? (
            <input
              ref={el => { editInputRef.current = el; }}
              value={editingText}
              onChange={e => setEditingText(e.target.value)}
              onBlur={saveEdit}
              onKeyDown={e => {
                if (e.key === 'Enter') saveEdit();
                if (e.key === 'Escape') cancelEdit();
              }}
            />
          ) : (
            <p onClick={() => startEditing(task.id)} style={{ margin: 0, cursor: mode === "edit" ? 'pointer' : 'default' }} >{task.todo}</p>
          )}
          <button onClick={() => onClickToggle(task.id)} style={{ marginLeft: 8, cursor: mode === "edit" ? 'pointer' : 'default'}} disabled={mode === "view"}>{task.completed ? "Done" : "Pending"}</button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
