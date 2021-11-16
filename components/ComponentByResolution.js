import React, { useEffect } from 'react';

const ComponentByResolution = ({ children }) => {
    console.dir(children);

    for(let i=0; i<children.length; i++) {
        if(!children[i].props.maxResolution) {
            console.error("child div must has 'maxResolution' ::", i);
            return <div>rendering error</div>
        } else if(typeof children[i].props.maxResolution !== 'number') {
            console.error("type of child's 'maxResolution' is not a Number ::", i);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', ComponentRerenderingByResolution);
    }, [])

    const ComponentRerenderingByResolution = () => {
        
    }
    
    return <div>{children}</div>
}

export default ComponentByResolution;