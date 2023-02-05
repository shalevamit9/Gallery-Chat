import { FC, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Modal } from './components';
import { ChatSocketProvider } from './context';
import { ArtChat, Home, InternalServerError, NotFound } from './pages';

const App: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [username, setUsername] = useState('');

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSave = (newUsername: string) => {
    setUsername(newUsername);
    handleModalClose();
  };

  let render = <Modal onSave={handleSave} />;

  if (!isModalOpen) {
    render = (
      <ChatSocketProvider username={username}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='/500' element={<InternalServerError />} />
          <Route path='/:artId' element={<ArtChat />} />
        </Routes>
      </ChatSocketProvider>
    );
  }

  return (
    render
  );
}

export default App;
