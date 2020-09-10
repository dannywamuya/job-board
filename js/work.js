$(document).ready(function() {
    $("button.register").click(function(event) {
        event.preventDefault(); //prevents erasing of info after submitting
        let name = $("#name").val(); //gets name input from user
        // let email = $("#email").val(); //gets email input from user
        let category = $("#category").val(); //gets category input from user
        // let jobdetails = $("#jobdetails").val(); //gets message input from user

        //confirms values have been retrieved for manipulation
        // alert(name);
        // alert(email);
        // alert(category);
        // alert(jobdetails);


        //shows various cards of category.
        //showing  Client's details of work.
        if (category === "Electrician") {
            createDiv(1, "../images/pexels-led-supermarket-577513.jpg", $("#category").val(), $("#name").val());
        } else if (category === "Carpenter") {
            createDiv(2, "../images/pexels-magda-ehlers-2660262.jpg", $("#category").val(), $("#name").val());
        } else if (category === "Content creator") {
            createDiv(3, "../images/pexels-roman-odintsov-4553612.jpg", $("#category").val(), $("#name").val());
        } else if (category === "Plumber") {
            createDiv(4, "../images/pexels-pixabay-357440.jpg", $("#category").val(), $("#name").val());
        } else if (category === "Teacher") {
            createDiv(5, "../images/pexels-pixabay-301926.jpg", $("#category").val(), $("#name").val());
        } else if (category === "Other") {
            createDiv(6, "../images/pexels-ketut-subiyanto-4560150.jpg", $("#category").val(), $("#name").val());
        } else {
            alert("Choose a category!");
        }
    });
});



function register() {
    var workers = [{
        workerName: $("#name").val(),
        workerJob: $("#category").val()
    }];

    let workers_serialized = JSON.stringify(workers);


    localStorage.setItem("workers", workers_serialized);

    let workers_deserialized = JSON.parse(localStorage.getItem("workers"));

    for (var i = 0; i < workers_deserialized.length; i++) {
        var output = '';
        output = workers[i].workerName + ":" + workers[i].workerJob;
        myFunction(output);
    };

    // document.getElementById('preview').innerHTML = output;

    console.log(workers_deserialized);

    function myFunction(text) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(text);
        node.appendChild(textnode);
        document.getElementById("preview").appendChild(node);
    }

};

//method to create new div
function createDiv(i, src, cat, nme) {
    var container = document.getElementById("cardcont");
    var el = document.createElement("div");
    el.className = "card";
    el.id = "cards" + i;
    container.appendChild(el);
    var img = document.createElement("IMG");
    img.setAttribute("src", src);
    img.className = "card-img-top";
    el.appendChild(img);
    var cBody = document.createElement("div");
    cBody.className = "card-body";
    el.appendChild(cBody);
    var h5 = document.createElement("h5");
    var p = document.createElement("p");
    var hire = document.createElement("a");
    h5.className = "card-text";
    h5.id = "workerName";
    h5.innerHTML = cat;
    p.className = "card-title";
    p.innerHTML = nme;
    hire.href = "#";
    hire.className = "btn";
    hire.textContent = "Hire";
    hire.classList.add("btn-primary");
    el.appendChild(h5);
    el.appendChild(p);
    el.appendChild(hire);
}