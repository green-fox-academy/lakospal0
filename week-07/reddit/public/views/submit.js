function submitted() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/posts', true);

    xhr.onload = function() {
        var response = xhr.responseText;
        console.log(response);
        window.location.href = 'main.html';
    };

    xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
    };

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    let enteredTitle = document.getElementById('enter-title-area').value;
    let enteredURL = document.getElementById('URL').value;
    xhr.send(JSON.stringify({ "title": enteredTitle, 'url': enteredURL }));
}