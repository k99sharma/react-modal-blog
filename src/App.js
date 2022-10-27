import { useState } from 'react';
import Modal from './Modal';
import './App.css';

function PopUp(props) {
  return (
    <div className="popUp">
      <h1>
        This is a modal!
      </h1>

      <button onClick={() => { props.setShow(false) }}>
        Close
      </button>
    </div>
  )
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {
        show
          ?
          <Modal>
            <PopUp setShow={setShow} />
          </Modal>
          :
          null
      }

      <div>
        <button onClick={() => setShow(true)}>
          Click me!
        </button>
      </div>
    </div>
  );
}

export default App;
