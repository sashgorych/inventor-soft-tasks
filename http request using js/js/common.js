let drow = (function () {
    function makeCard(info) {
        let str = `
    <div class="card  col-3">
    <img class="card-img-top" src="${info.avatar_url}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${info.login}</h5>
        <p class="card-text">id: ${info.id}</p>
     
    </div>
</div>
`
        return str;
    }
    function drowHtml(info) {
        for(let i=0;i<20;i++) {
            let str = makeCard(info[i]);
            document.getElementById("tabl").insertAdjacentHTML("beforeEnd", str);
        }
    }
    function deleteEl() {
        let parent = document.querySelector("#tabl");
        document.querySelectorAll(".card").forEach(function (el) {
            el.remove();
        })
    }
    return{
        drow: drowHtml,
        deleteEl:deleteEl
    }
})();
let way1 = (function () {
    function call() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users', false);
        xhr.send();

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
        } else {
            return JSON.parse(xhr.responseText); // responseText -- текст ответа.
        }
    }

    return {
        call: call
    }

})();
let way2 = (function () {
    function call() {
        let a = $.ajax({
            url: "https://api.github.com/users",
            cache: false
        }).done(function( html ) {
                drow.drow(html);
        });
    }

    return {
        call: call
    }

})();
let way4 = (function () {
    function call() {
        axios.get('https://api.github.com/users')
            .then(function (response) {
                drow.drow(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return {
        call: call
    }

})();
let way3 = (function () {
    let ans;
    function call() {
        fetch('https://api.github.com/users')
            .then(function(response) {
                return response.json();
            })
            .then(function(users) {
                drow.drow(users)
            })
            .catch( alert );
    }

    return {
        call: call
    }

})();

document.querySelector("#f1").addEventListener("click",function () {
 let ans = way1.call();
 drow.drow(ans)
});
document.querySelector("#f2").addEventListener("click",function () {
    way2.call();
});
document.querySelector("#f3").addEventListener("click",function () {
    way3.call();

});
document.querySelector("#f4").addEventListener("click",function () {
    way4.call();
});
document.querySelector("#f5").addEventListener("click",function () {
    drow.deleteEl();
});