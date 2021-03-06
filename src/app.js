console.log("app.js is running");

const app = {
    title : 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options:['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ?'Here are your options': 'no options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)


