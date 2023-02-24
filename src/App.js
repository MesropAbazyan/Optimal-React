import {useState, useCallback, useMemo} from 'react';
import VideoPlayer from './VideoPlayer';

function App() {
  const [text, setText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  // "useCallback" is used to create a function once 
  // and use it as many times as needed
  const onPlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const onPause = useCallback(() => {
    setIsPlaying(false);
  }, []);


  // 2nd option
  // The "useMemo" Hook returns a memoized value.
  // It only runs when one of its dependencies update.
  const videoData = useMemo(() => {
    return {
      title: 'Bunny Movie',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    };
  }, []);

  return (
    <div>
      <input type='text' value={text} onChange={(e) => {
        setText(e.target.value);
      }} />
      <span>{text}</span>

      <div>Video is {isPlaying ? 'playing' : 'paused'}</div>
      <VideoPlayer 
                    // src='https://www.w3schools.com/html/mov_bbb.mp4' 
              // src={{
              //   title: 'Bunny Movie',
              //   url: 'https://www.w3schools.com/html/mov_bbb.mp4',
              // }}
        src={videoData}
        onPlay={onPlay}
        onPause={onPause}
      />
    </div>
  );
}

export default App;
