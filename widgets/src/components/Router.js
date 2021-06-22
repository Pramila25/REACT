import { useEffect,useState } from 'react';

const Router = ({ path, children }) => {
    const [currentPath,setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        //console.log('in useeffect');
        const onLocationChange = () => {
            //console.log('in location change');
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popState', onLocationChange);

        return () => {
            //console.log('in return of location change clean up');
            window.removeEventListener('popState', onLocationChange);
        };
    }, []);
   
    return currentPath === path ? children : null;

}

export default Router;  