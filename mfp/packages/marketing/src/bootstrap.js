import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
//mount function to start up app
const mount = (el) => {
    ReactDom.render(<App/>, el);
};

//if in dev and in isolation call mount immediately
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');

    if(devRoot){
        mount(devRoot);
    }
}

//running through container, should export mount
export { mount };