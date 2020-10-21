import React, {useState, useEffect, useRef} from 'react';
import meow from './meow.mp3';
import meow1 from './meow1.mp3';
import meow2 from './meow2.mp3';
import meow3 from './meow3.mp3';
import meow4 from './meow4.mp3';
import meow5 from './meow5.mp3';

export default function App() {
  const [name, setName] = useState('Shimi')
  const renderCount = useRef(1);

  const playAudio = () => {
    const a = Math.floor(Math.random() * 6);
    const x = document.getElementsByClassName("audio-element")[0]
    let y = [meow, meow1, meow2, meow3, meow4, meow5]
    x.setAttribute("src", y[a]);
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
    
  }

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  })
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  
  

  return (
    <div className="box">
      <audio className="audio-element"></audio>
      <img
        alt='meow'
        src={`https://robohash.org/${name}?set=set4`}
        onClick={playAudio}
      />
      <hr />
      <div className="container">
        <div className="search">
          <input 
            ref={inputEl}
            value={name}
            placeholder="Who's your Meow?"
            onChange={e => setName(e.target.value)}
            maxLength={18}
          />
          <button onClick={onButtonClick}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
          <button>
            <i className="fa fa-heart" aria-hidden="true"></i>
          </button>
        </div>
        <div className="name">I'm {name}!</div>
      </div>
      <div className="render">{renderCount.current}</div>
    </div>
  )
}