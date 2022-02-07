function compute()
{
    var principal = parseInt(document.getElementById("principal").value);

    // check value of principle
    if (principal <= 0 || isNaN(principal)){
        alert("Enter a positive number!")
        document.getElementById("principal").focus()
        return
    }

    //rate
    var rate = document.getElementById("rate").value;

    //years
    var years = document.getElementById("years").value;

    //interest
    var interest = principal * years * rate /100;

    //actual year
    var year = new Date().getFullYear()+parseInt(years);

    //Html for visualize
    var finalHtml = `</br><b>If</b> you deposit <label>${principal}</label>,</br>
    <b>at</b> an interest rate of <label>${rate}%</label>.</br>
    <b>You</b> will receive an amount of <label>${interest}</label>,</br>
    <b>in</b> the year <label>${year}</label>`
    document.getElementById("result").innerHTML = finalHtml
}

//update rate value
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        