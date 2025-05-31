document.documentElement.setAttribute('lang', 'en');


/************************************************************************/
/****************************** Build head ******************************/
/************************************************************************/


function appendMetaElement(atributes) {
    var metaEl = document.createElement('meta');
    for (const atribute of atributes) {
        metaEl.setAttribute(atribute.name, atribute.value);
    }
    document.head.appendChild(metaEl);
}

appendMetaElement([{
    name: 'httpEquiv',
    value: 'X-UA-Compatible',
}, {
    name: 'content',
    value: 'IE=edge',
}]);

appendMetaElement([{
    name: 'charset',
    value: 'UTF-8',
}]);

appendMetaElement([{
    name: 'name',
    value: 'viewport',
}, {
    name: 'content',
    value: 'width=device-width, initial-scale=1.0',
}]);

var titleEl = document.createElement('title');
titleEl.text = 'Malú';
document.head.appendChild(titleEl);


/************************************************************************/
/****************************** Build body ******************************/
/************************************************************************/


document.body.style =
    'font-family: sans-serif;' +
    'display: flex;' +
    'flex-direction: column;';

function getText(value) {
    value;
}

var textEl = document.createElement('p');
textEl.id = 'text';
textEl.style = 'width: 300px; margin: 20px auto;';
textEl.textContent = '';
document.body.appendChild(textEl);

var inputEl = document.createElement('input');
inputEl.id = 'input';
inputEl.style = 'text-align: center; height: 35px; border: 2px, solid, purple; border-radius: 5px;';
inputEl.addEventListener('input', () => {
    document.getElementById('text').textContent = getText(document.getElementById('input').value);
});
document.body.appendChild(inputEl);