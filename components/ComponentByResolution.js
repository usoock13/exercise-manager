import React, { useState, useEffect } from 'react';

const RENDER_ERROR_COMPONENT = <div>rendering error</div>;

const ComponentByResolution = ({ children }) => {
    // console.dir(children);

    if(!children) {
        console.error("CRB dont have any child.");
        return RENDER_ERROR_COMPONENT;
    }
    if(children.length <= 1) return children;

    for(let i=0; i<children.length; i++) {
        if(!children[i].props.maxresolution) {
            console.error("child div must has 'maxResolution' ::", i);
            return RENDER_ERROR_COMPONENT;
        } else if(typeof children[i].props.maxresolution !== 'number') {
            console.error("type of child's 'maxResolution' is not a Number ::", i);
        }
    }

    let resolutionMap = {};
    children.forEach(child => {
        resolutionMap[child.props.maxresolution] = child
    })

    const [resolution, setResolution] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', ComponentRerenderingByResolution);
        setResolution(window.innerWidth);
    }, []);

    const ComponentRerenderingByResolution = (e) => {
        setResolution(e.target.innerWidth);
    }

    const resolutionArray = Object.keys(resolutionMap).sort((a, b) => a - b);
    for(let i=0; i<resolutionArray.length; i++) {
        if(resolution <= Number(resolutionArray[i])) return resolutionMap[resolutionArray[i]];
    }
    return <div>{children[0]}</div>
}

export default ComponentByResolution;