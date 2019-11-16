let votingArray = [];

function makeCorsRequest(method, url) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    xhr.onload = function() {
        var response = xhr.responseText;

        if (url == 'http://localhost:8080/posts') {

            // If we gets posts
            createPostsNode(response);
        } else if (url.indexOf("upvote") != -1 || url.indexOf("downvote") != -1) {

            // If we voted
            var post = JSON.parse(response)[0];
            document.getElementById('score-' + post.id).innerHTML = post.score;
            document.getElementById('upvote-' + post.id).src = "../assets/upvoted.png";
            document.getElementById('downvote-' + post.id).src = "../assets/downvoted.png";
            votingArray.push(post.id);
            console.log(votingArray);
        }
    };

    xhr.onerror = function(e) {
        alert(e);
    };

    xhr.send();
}

function createPostsNode(postsString) {
    const posts = JSON.parse(postsString);
    const mainDiv = document.getElementById('main-content');


    for (const post in posts) {
        if (posts.hasOwnProperty(post)) {
            const element = posts[post];
            let postDiv = `<div class="posts">
            <div lass="voting-area">
                <img class="upvote" id="upvote-` + element.id + `" onclick="upVote(` + element.id + `)" src="../assets/upvote.png" alt="Szia :)">
                <div class="vote-text" id=score-` + element.id + `>` + element.score + `</div>
                <img class="downvote" id="downvote-` + element.id + `" onclick="downVote(` + element.id + `)"  src="../assets/downvote.png" alt="Szia :)">
            </div>
            <div class="text-area">
                <h2 class="post-title">` + element.title + `</h2>
                <div class="options">
                    <div class="remove-post">Remove post</div>
                    <div class="modify-post">Modify post</div>
                </div>
            </div>
            </div>`;
            mainDiv.insertAdjacentHTML('beforeend', postDiv);
        }
    }
}

function downVote(id) {
    if (votingArray.indexOf(id) !== -1) {
        alert('u suck')
    } else {
        makeCorsRequest('PUT', 'http://localhost:8080/posts/' + id + '/downvote');
    }
}

function upVote(id) {
    if (votingArray.indexOf(id) !== -1) {
        alert('u suck')
    } else {
        makeCorsRequest('PUT', 'http://localhost:8080/posts/' + id + '/downvote');
    }
}

// Creating posts
makeCorsRequest('GET', 'http://localhost:8080/posts');