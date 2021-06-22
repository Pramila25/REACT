import React from 'react';


const Link = ({ href, className, children }) => {
    const onClick = (event) => {
        if(event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popState');
       window.dispatchEvent(navEvent);
       console.log('on link event dispatched');
}
    return (
        <a onClick={onClick} href={href} className={className} >{children}</a>
    );
}

export default Link;