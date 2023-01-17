import { Habit } from './components/Habit';

import './styles/global.scss';

function App() {
  return (
    <div>
      <Habit completed={5} />
      <Habit completed={2} />
      <Habit completed={4} />
      <Habit completed={10} />
      <Habit completed={2} />
      <Habit completed={9} />
      <Habit completed={8} />
    </div>
  );
}

export default App;
