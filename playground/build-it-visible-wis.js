
const app = {
    title: 'Visibility Toggle',
    subtitle: 'Put your life in the hands of a toggler',
    
  };

const toggleMe = () => { 
    if (app.subtitle.length>0) {
       {app.subtitle = ''}
    }  else {
    {app.subtitle= 'Put your life in the hands of a toggler'}
    }
      toggle();
    };
  


const appRoot = document.getElementById('app');

const toggle = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        <button className='button' onClick={toggleMe}>Toggler</button>
        <p>{app.subtitle}</p>
       
    
      </div>
    );
  
    ReactDOM.render(template, appRoot);
  };
  
  toggle();