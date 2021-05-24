function shiftpromo(){
    promo = new Array("Lunch Time Special Offer - $188 Sushi Set 12 Pieces",
                "Students can have a 10%-discount!",
                "During weekdays(Mon to Fri), there is no tea fee!");
    var x = document.querySelector("#promotion");
    var i = (Math.random()*100)%3;
    x.innerHTML = promo[Math.floor(i)];
}


function checkform(){
    var date = document.querySelector("input[name='date']").value;
    var time = document.querySelector("select[name='time']").value;
    var guest = document.querySelector("input[name='number']").value;
    var reminder = document.getElementById("reminder");
    var check = reserve(date,time,guest);
    if(date==""||time==""||guest==""){
        reminder.innerHTML="Data not completed, please re-enter.";
    }
    else{
        if(check==true){
            reminder.innerHTML="Reservation done. Thank you.";
            localStorage.setItem("guest",guest);
        }
        else{
            reminder.innerHTML="No table is available for the date and time.";
        }
    }
    document.querySelector("input[name='date']").value="";
    document.querySelector("select[name='time']").value="";
    document.querySelector("input[name='number']").value="";
}

