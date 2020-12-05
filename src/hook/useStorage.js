import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) =>{

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect (()=>{

        //create a reference
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');
    
        //Monitor Upload Process: https://firebase.google.com/docs/storage/web/upload-files  
        storageRef.put(file).on('state_changed',(snapshot) => {

            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);

            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                  console.log('Upload is paused');
                  break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                  console.log('Upload is running');
                  break;
              }

        }, (error) => {
            //handle unsuccessful uploads
            setError(error);
        }, async () => {
            //handle successful uploads on complete
            //get the download URL: https://firebasestorage.googleapis.com/..
            const url = await storageRef.getDownloadURL();

            const createAt = timestamp();
            console.log('File available at', url); //test

            await collectionRef.add({ url, createdAt });
          
            setUrl(url);
        });

    }, [file]);


    return {progress, error, url};
}
export default useStorage;