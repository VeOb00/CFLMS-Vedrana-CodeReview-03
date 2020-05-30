function calculateInsurance() {

    var fullname = document.getElementById("fullname").value;
    var age = Number(document.getElementById("age").value);
    var country = document.getElementById("country").value;
    var horsepower = Number(document.getElementById("horsepower").value);

    if (fullname == "" || age <= 0 || horsepower <= 0) {
        alert(`Please fill out the form completely to get your custom quote.`);
        return;
    }

    if (age < 16 || age > 100) {
        alert(`Please check your age input.`)
    }
    
    if (document.getElementById('country').value == "austria") {
        insurance = ((horsepower * 100) / age) + 50;
    } else if (document.getElementById('country').value == "hungary") {
        insurance = ((horsepower * 120) / age) + 100;
    } else if (document.getElementById('country').value == "greece") {
        insurance = ((horsepower * 150) / (age + 3)) + 50;
    } 

    fullname = capital_letter(fullname);
    var quote = insurance.toFixed(2)
    
    var output = `${fullname}, your insurance costs ${quote} \u20AC`;
    document.getElementById("outputcalc").innerHTML = output;
}

function capital_letter(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}

var elementNode = document.getElementById('buttoncalc');
elementNode.addEventListener('click', calculateInsurance, false);
