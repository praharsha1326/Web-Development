function timeConversion(){
    
    var a=document.getElementById("INPUT").value
    var time = a.slice(0,8);
    var modifier = a.slice(8,11);
    
    let [hours, minutes,seconds] = time.split(":");
    if(hours==="12"){
        hours="00";
    }
    if (modifier === "PM") {
        hours = parseInt(hours) + 12;
    }
    alert(hours + ":" + minutes +":" + seconds);
    

    return true;
}