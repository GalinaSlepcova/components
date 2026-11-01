import Greeting from './Greeting';
import TaskList from './TaskList';
import ActionButton from './ActionButton';
import ProfileCard from './ProfileCard';
import ImageGallery from './ImageGallery';

function App() {
  return (
    <div>
      <Greeting />
      <hr />
      <TaskList />
      <hr />
      <ActionButton />
      <hr />
      <ProfileCard />
      <hr />
      <ImageGallery />
    </div>
  );
}

export default App