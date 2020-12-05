import React, { useEffect } from 'react';
import useStorage from '../hook/useStorage';


const ProgressBar = ({ file, setFile }) => {

  const { progress, error, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div class="progress-bar" style={{width:progress + '%'}}>

    </div>
  );
} 

export default ProgressBar;