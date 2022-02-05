import Counter from 'views/counter';
import Todos from 'views/todos';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Link to="counter">Counter</Link>
      <Link to="todos">To Do</Link>
      <br />
      <Routes>
        <Route path="counter" element={<Counter />} />
        <Route path="todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
