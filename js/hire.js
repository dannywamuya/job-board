function freelancer(name, email, category, details) {
    this.name = name;
    this.email = email;
    this.category = category;
    this.details = details;
}

$(document).ready(function () {
    $("button.findfl").click(function (event) {
        event.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
    });
    $("button.available").click(function (event) {
        event.preventDefault();
        let flname = $("#flname").val();
        let flemail = $("#flemail").val();
        let flcategory = $("#flcategory").val();
        let fldetails = $("#fldetails").val();

        var newhire = new freelancer(flname, flemail, flcategory, fldetails, fchoose);
        $(".freelancer-details").append(
            '<tr><td id="fname">' +
            newhire.name +
            '</td><td id="femail">' +
            newhire.email +
            '</td><td id="fcategory">' +
            newhire.category +
            '</td><td id="fdetails">' +
            newhire.details +
            '</td><td id="fchoose">' +
            newhire.fchoose +
            "</td></tr>"
        );


    });
});