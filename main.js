var name_of_the_guests = [];
function submit() {
    var GuestName = document.getElementById("name1").value;
    name_of_the_guests.push(GuestName);
    console.log(GuestName);
    document.getElementById("submit_div").innerHTML = name_of_the_guests;
}
function show() {
    var array_value = "";
    for (i = 0; i < name_of_the_guests.length; i++) {
        console.log(name_of_the_guests[i]);
        array_value = array_value + name_of_the_guests[i] + "<br>";
        document.getElementById("sort_button").style.display = "inline-block";
    }
    document.getElementById("show_div").innerHTML = array_value;
}
function sorting(){
    name_of_the_guests.sort();
    console.log(name_of_the_guests);
    document.getElementById("sort_div").innerHTML = name_of_the_guests;
}
function searching() {
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;
    for (j = 0; j < name_of_the_guests.length; j++) {
        if (s == name_of_the_guests[j]) {
            found = found + 1;
        }
    }
    document.getElementById("search_div").innerHTML = "name found " + found + " time/s";
    console.log("found name" + found + "time/s")
}