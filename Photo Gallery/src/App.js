import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/imageGrid';
import Modal from './comps/Modal';

function App() {

  const {selectedImage, setSelectedImage} = useState();
 
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid />
      <Modal />
    </div>
  );
}

export default App;
