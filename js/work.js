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
            createDiv("../images/pexels-led-supermarket-577513.jpg", $("#category").val(), $("#name").val(), "electrician");
        } else if (category === "Carpenter") {
            createDiv("../images/pexels-magda-ehlers-2660262.jpg", $("#category").val(), $("#name").val(), "carpenter");
        } else if (category === "Content Creator") {
            createDiv("../images/pexels-roman-odintsov-4553612.jpg", $("#category").val(), $("#name").val(), "content");
        } else if (category === "Plumber") {
            createDiv("../images/pexels-pixabay-357440.jpg", $("#category").val(), $("#name").val(), "plumber");
        } else if (category === "Teacher") {
            createDiv("../images/pexels-pixabay-301926.jpg", $("#category").val(), $("#name").val(), "teacher");
        } else if (category === "Other") {
            createDiv("../images/pexels-ketut-subiyanto-4560150.jpg", $("#category").val(), $("#name").val(), "other");
        } else {
            alert("Choose a category!");
        }
    });
});


function register () {
    // console.log(localStorage.getItem("workers"))
    var workers = [
    {
        workerName: $("#name").val(),
        workerJob:  $("#category").val()
    }
    ];

    let workers_serialized = JSON.stringify(workers); //turn workers to JSON string
    var oldWorkers = localStorage.getItem("workers"); //new variable stores the workers JSON string

    if (oldWorkers == null ){
        localStorage.setItem("workers", workers_serialized);
    } else {
        var combinedWorkers = oldWorkers.concat(workers_serialized);
        localStorage.setItem("workers", combinedWorkers);
    }  
    
    // let workers_deserialized = JSON.parse(localStorage.getItem("workers"));

    for (var i = 0; i < localStorage.getItem("workers").length; i++) {
    output = workers[i].workerName + ": " + workers[i].workerJob;
    myFunction(output);
    };

    console.log(localStorage.getItem("workers"));

    function myFunction(text) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(text);
        node.appendChild(textnode);
        document.getElementById("preview").appendChild(node);
}

//method to create new div
function createDiv(src, cat, nme, category) {
    debugger;
    var container = document.getElementById("w-container");
    var el = document.createElement("div");
    el.className = "jumbotron";
    el.classList.add("filterDiv");
    el.classList.add(category);
    el.classList.add("show");
    el.id = "w-card";
    container.appendChild(el);
    var dImage = document.createElement("div");
    dImage.className = "imageDiv";
    el.appendChild(dImage);
    var img = document.createElement("IMG");
    img.setAttribute("src", src);
    img.className = "card-img-top";
    dImage.appendChild(img);
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

filterSelection("all");

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

// Show filtered elements
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
}
