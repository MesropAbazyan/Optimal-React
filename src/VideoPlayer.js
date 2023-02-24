import {useRef, memo} from 'react';

export default memo(function VideoPlayer({src, onPlay, onPause}) {
    // Unlike the "useState" hook, we use the "useRef" hook,
    // when we need to store information in the component 
    // so that the "render" function is not called 
    // when changing it's value.
    const videoRef = useRef();

    const countRef = useRef(0);
    countRef.current++;

    return (
        <div>
            <p>Call count is {countRef.current}</p>

            <h3>{src.title}</h3>
            <video src={src.url} ref={videoRef} />

            <button onClick={() => {
                videoRef.current.play();
                onPlay();
            }}>Play</button>
            
            <button onClick={() => {
                videoRef.current.pause();
                onPause();
            }}>Pause</button>
        </div>
    );
}, 
            // 1st option
        //   (prevProps, nextProps) => {
        //     if (nextProps.onPlay    !== prevProps.onPlay)    return false;
        //     if (nextProps.onPause   !== prevProps.onPause)   return false;
        //     if (nextProps.src.title !== prevProps.src.title) return false;
        //     if (nextProps.src.url   !== prevProps.src.url)   return false;

        //     return true;
        //   }
          // "Memo" can accept 2nd function which is used for compare.
          // When the return value is "true", 
          // memo does not call the internal function again.
);
