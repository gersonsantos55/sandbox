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
