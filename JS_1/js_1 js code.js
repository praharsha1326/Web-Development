function validString(){
    
    var a=document.getElementById("i_string").value
    let [str1, str2,numb] = a.split(", ");
    var l1=str1.length
    var l2=str2.length
    var ok=0;
    if((l1+l2)<=numb){
        ok=1;
    }
    var l=0
    for(i=0; i<Math.min(l1,l2);i++){
        if(str1[i]==str2[i]){
            l++;
        }
        else{
            break;
            
        }
    }

    if((numb-l1-l2+(2*l))%2==0){
        ok=1;
    }
    if(ok==1){
        alert("YES, u can convert "+ str1 +" to "+ str2 + " in " + numb + " steps");
    }
    else{
        alert("NO, u can't convert "+ str1 +" to "+ str2 + " in " + numb + " steps");
    }
    return true;
}