function submitted() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/api/links', true);

    /*xhr.onload = function() {
        let response = xhr.responseText;
        console.log(response);
    };*/

    xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
    };

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    let url = document.querySelector('.url').value;
    let alias = document.querySelector('.alias').value;
    xhr.send(JSON.stringify({ "url": url, 'alias': alias }));
    console.log("succes")
}