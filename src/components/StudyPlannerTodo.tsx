import { useState } from 'react';
import { Plus, Check, Trash2, Clock, BookOpen, Pencil } from 'lucide-react';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  category: 'reading' | 'practice' | 'revision' | 'general';
  time?: string;
}

const categoryIcons = {
  reading: BookOpen,
  practice: Pencil,
  revision: Clock,
  general: Check,
};

const categoryColors = {
  reading: 'primary',
  practice: 'accent',
  revision: 'secondary',
  general: 'muted-foreground',
};

const StudyPlannerTodo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: '1', text: 'Complete Indian Polity Chapter 3', completed: false, category: 'reading', time: '2 hours' },
    { id: '2', text: 'Practice Previous Year Questions - History', completed: true, category: 'practice', time: '1.5 hours' },
    { id: '3', text: 'Revise Tamil Nadu Geography', completed: false, category: 'revision', time: '1 hour' },
    { id: '4', text: 'Current Affairs - January 2025', completed: false, category: 'reading', time: '45 mins' },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TodoItem['category']>('general');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          text: newTodo,
          completed: false,
          category: selectedCategory,
        },
      ]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(t => t.completed).length;
  const progress = todos.length > 0 ? (completedCount / todos.length) * 100 : 0;

  return (
    <div className="glass-card p-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-foreground">Daily Study Plan</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {completedCount} of {todos.length} tasks completed
          </p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-bold gradient-text">{Math.round(progress)}%</span>
          <p className="text-xs text-muted-foreground">Today's Progress</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-muted/50 rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full progress-gradient rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Add Todo Form */}
      <div className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new study task..."
            className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as TodoItem['category'])}
          className="px-3 py-3 rounded-xl bg-muted/30 border border-border/50 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
        >
          <option value="reading">📚 Reading</option>
          <option value="practice">✏️ Practice</option>
          <option value="revision">🔄 Revision</option>
          <option value="general">📋 General</option>
        </select>
        <button
          onClick={addTodo}
          className="btn-gradient p-3 rounded-xl text-primary-foreground"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Todo List */}
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {todos.map((todo, index) => {
          const Icon = categoryIcons[todo.category];
          return (
            <div
              key={todo.id}
              className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                todo.completed 
                  ? 'bg-muted/20 opacity-60' 
                  : 'bg-muted/30 hover:bg-muted/40'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Checkbox */}
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                  todo.completed
                    ? 'bg-primary border-primary'
                    : 'border-muted-foreground/50 hover:border-primary'
                }`}
              >
                {todo.completed && <Check className="w-4 h-4 text-primary-foreground" />}
              </button>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className={`text-foreground transition-all duration-300 ${
                  todo.completed ? 'line-through text-muted-foreground' : ''
                }`}>
                  {todo.text}
                </p>
                {todo.time && (
                  <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{todo.time}</span>
                  </div>
                )}
              </div>

              {/* Category Icon */}
              <div className={`p-2 rounded-lg bg-${categoryColors[todo.category]}/10`}>
                <Icon className={`w-4 h-4 text-${categoryColors[todo.category]}`} />
              </div>

              {/* Delete Button */}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="opacity-0 group-hover:opacity-100 p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-all duration-300"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          );
        })}

        {todos.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>No tasks yet. Add your first study task!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyPlannerTodo;
