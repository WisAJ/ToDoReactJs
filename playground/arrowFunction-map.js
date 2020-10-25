const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 5,
    multiply()  {
      
        return this.numbers.map((number) => this.multiplyBy* number);
    }
}
console.log(multiplier.multiply());



// var template = <p>This is the first react statment</p>

var app = {
    title: 'Indecision App',
    subtitle:'put your life in the hands of a computer',
    options: ['one', 'two']
    
    };

var template = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' :'No options available'}</p>

<ol>
	<li>Item one</li>
	<li>Item two</li>
</ol>
    </div>
)

var info = {
         userName:'Wissam',
         age:'40ish',
         city:"Oslo",
         gender:"male"
}

var city = location => {
    if(location){
        return <p>City:{location}</p> ;
    }  
}

var template2 = (
    <div>
        <p>{info.userName.toUpperCase()}</p>
        {/* the down one is ternary operator: 2 choices */}
        <p>Age: {info.age ? info.age : 'Anonymous'}</p>  
        {city(info.city)}
        {(info.gender && info.gender === 'male') && <p>Gender: {info.gender}</p>}
        {/* above: logic and operator; for once choice */}
    </div>
);

var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot);
// ReactDOM.render(template2, appRoot)





