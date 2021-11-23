import React, { useEffect } from 'react';

const RENDER_ERROR_COMPONENT = <div>rendering error</div>;

const ComponentByResolution = ({ children }) => {
    console.dir(children);

    if(!children) {
        console.error("CRB dont have any child.");
        return RENDER_ERROR_COMPONENT;
    }
    if(children.length <= 1) return children;

    for(let i=0; i<children.length; i++) {
        if(!children[i].props.maxResolution) {
            console.error("child div must has 'maxResolution' ::", i);
            return RENDER_ERROR_COMPONENT;
        } else if(typeof children[i].props.maxResolution !== 'number') {
            console.error("type of child's 'maxResolution' is not a Number ::", i);
        }
    }

    let components = {};
    children.forEach(child => {
        components[components.length] = child.props.children;
    })
    console.log(components);

    useEffect(() => {
        window.addEventListener('resize', ComponentRerenderingByResolution);
    }, [])

    const ComponentRerenderingByResolution = () => {
        
    }
    
    return <div>{children[0]}</div>
}

export default ComponentByResolution;