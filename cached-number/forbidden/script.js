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
titleEl.text = 'Cached Number';
document.head.appendChild(titleEl);


/************************************************************************/
/****************************** Build body ******************************/
/************************************************************************/


document.body.style =
    'font-family: sans-serif;' +
    'display: flex;' +
    'flex-direction: column;';

var h1El = document.createElement('h1');
h1El.textContent = 'Cached Number';
h1El.style = 'text-align: center;';
document.body.appendChild(h1El);

var containerEl = document.createElement('div');
containerEl.style =
    'width: 300px;' +
    'margin: 0 auto;';

var cachedNumberEl = document.createElement('p');
cachedNumberEl.id = 'cached-number';
cachedNumberEl.style =
    'font-size: 20px;' +
    'font-weight: bold;' +
    'width: 100%;' +
    'text-align: center;';

containerEl.appendChild(cachedNumberEl);

var buttonsRowEl = document.createElement('div');
buttonsRowEl.style = 'display: flex;';

function createButton() {
    var buttonEl = document.createElement('button');
    buttonEl.style =
        'width: calc(100% - 30px);' +
        'margin: 0 5px;'

    return buttonEl;
}

var increaseButtonEl = createButton();
increaseButtonEl.textContent = 'Increase';
increaseButtonEl.addEventListener('click', onIncreaseValue);

var decreaseButtonEl = createButton();
decreaseButtonEl.textContent = 'Decrease';
decreaseButtonEl.addEventListener('click', onDecreaseValue);

var resetButtonEl = createButton();
resetButtonEl.textContent = 'Reset';
resetButtonEl.addEventListener('click', onResetValue);

buttonsRowEl.appendChild(increaseButtonEl);
buttonsRowEl.appendChild(decreaseButtonEl);
buttonsRowEl.appendChild(resetButtonEl);

containerEl.appendChild(buttonsRowEl);
document.body.appendChild(containerEl);


/************************************************************************/
/*************************** Interaction logic **************************/
/************************************************************************/


const CACHED_NUMBER_VALUE_ID = 'CACHED_NUMBER_VALUE_ID';

function retrieveValue() {
    var value = localStorage.getItem(CACHED_NUMBER_VALUE_ID);
    return !!value ? +value : 0;
}

function saveValue(value) {
    if (!isNaN(value)) {
        localStorage.setItem(CACHED_NUMBER_VALUE_ID, value);
    }
}

function updateView() {
    document.getElementById('cached-number').textContent = retrieveValue();
}

function onIncreaseValue() {
    var value = retrieveValue();
    value++;
    saveValue(value);
    updateView();
}

function onDecreaseValue() {
    var value = retrieveValue();
    value--;
    saveValue(value);
    updateView();
}

function onResetValue() {
    saveValue(0);
    updateView();
}

updateView();
