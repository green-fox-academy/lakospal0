/*let button = document.querySelector('#mybtn');
button.addEventListener('click', function() {
    console.log("asd")
    let text = document.createElement('p');
    text.innerHTML = 'fawfawoipjijnnlkjlbnljl';
    button.setAttribute('disabled', '');
    document.querySelector('body').appendChild(text);
})

let form = document.querySelector('form');
form.addEventListener('submit', function() {
    event.preventDefault();
    button.disabled = false;
    body = {
        "url": form.url,
        "alias": form.alias
    }
})*/

let button = document.querySelector('#btn');
button.addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/api/links', true);
    let response;

    xhr.onload = function() {
        response = xhr.responseText;
        if (xhr.status == 400) {
            let text = document.createElement('p');
            text.innerHTML = "your alias is already in use";
            document.querySelector('body').appendChild(text);
        } else {
            let text = document.createElement('p');
            text.innerHTML = "your url is : " + url + " your alias is : " + alias;
            document.querySelector('body').appendChild(text);
        }
    };

    xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
    };

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    let url = document.querySelector('#url').value;
    let alias = document.querySelector('#alias').value;
    xhr.send(JSON.stringify({
        "url": url,
        'alias': alias
    }));
})

/*function submitted() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/api/links', true);

    xhr.onload = function() {
        let response = xhr.responseText;
        console.log(response);
    };

    xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
    };

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    let url = document.querySelector('.url').value;
    let alias = document.querySelector('.alias').value;
    xhr.send(JSON.stringify({
        "url": url,
        'alias': alias
    }));
}*/