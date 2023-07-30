function Validation() {
    // Salary
    let sal = document.getElementById("salary1").value;
    var num = isNaN(parseInt(sal)) ? null : parseInt(sal)
    if (num == null) {
        document.getElementById("err").innerHTML = "Enter number value";
        return false;
    }
    else {
        // sal = parseInt(sal);
        if (num < 100) {
            document.getElementById("err").innerHTML = "Enter more than 100";
            return false;
        }
    }

    // DOB
    let dob = document.getElementById("DOB").value;
    // dob = dob.Date().toJSON().slice(0,10).replace(/-/g,'/');
    // let currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let currentDate = new Date().toJSON().slice(0, 10);
    let age = parseInt(currentDate.slice(0, 4)) - parseInt(dob.slice(0, 4));

    if (age <= 18){
        document.getElementById("agemsg").innerHTML = "Minor : " + age ;
        return false;
    }
        
    else if (age > 18 && age < 60) {
        document.getElementById("agemsg").innerHTML = "Major : " + age;
        return false;
    }
        
    else
    {
        document.getElementById("agemsg").innerHTML = "Senior Citizon : " + age;
        return false;
    }
        

    return true;
}

function DOBValidation() {
    // DOB
    let dob = document.getElementById("DOB").value;
    // dob = dob.Date().toJSON().slice(0,10).replace(/-/g,'/');
    // let currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let currentDate = new Date().toJSON().slice(0, 10);
    let age = parseInt(currentDate.slice(0, 4)) - parseInt(dob.slice(0, 4));

    if (age <= 18){
        document.getElementById("agemsg").innerHTML = "Minor : " + age ;
        return false;
    }
        
    else if (age > 18 && age < 60) {
        document.getElementById("agemsg").innerHTML = "Major : " + age;
        return false;
    }
        
    else
    {
        document.getElementById("agemsg").innerHTML = "Senior Citizon : " + age;
        return false;
    }

    return true;
}