async function sayHello() {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            document.body.style.border = '5px solid red';
            alert('Hello from extension');
        }
    });
}
document.getElementById('myButton').addEventListener('click', sayHello);