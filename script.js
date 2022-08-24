//-----------------------------------------------------------Quiz-----------------------------------------------
function submit(){
    document.getElementsByClassName("submit")[0].style.display="none"
    var c=0;
    var i=0;
    var j=0;
    var flag;
    var a=["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"];
    var q=[];
    for(i=0;i<10;i++){
        var flag=false;
        for(j=0;j<4;j++){
            if(document.getElementsByName(a[i])[j].checked){
    q.push(document.getElementsByName(a[i])[j].value);
    flag=true
    break;
            }
        }
        if(!(flag)){
            q.push("none");
        }
    }
    var ans=["option2","option3","option1","option2","option3","option1","option2","option4","option2","option1"];
    console.log(q);
    for(i=0;i<10;i++){
        if(q[i]==ans[i]){
            c++;
        }
    }
    document.getElementById("score").innerHTML="Your score: "+c+"/10";
    for(i=0;i<10;i++){
        for(j=0;j<4;j++){
            document.getElementsByName(a[i])[j].disabled=true;
            if(document.getElementsByName(a[i])[j].value==ans[i]){
    document.getElementsByClassName("option")[4*i+j].style.backgroundColor="rgb(0,255,0,0.25)";
            }
        }
        if(q[i]!=ans[i] && q[i]!="none"){
            document.getElementsByClassName("option")[4*i+Number(q[i].charAt(6))-1].style.backgroundColor="rgb(255,0,0,0.25)";

        }
    }
    
}
var poll1_count=1;
var poll2_count=1;
function poll(x){
    poll1=document.getElementsByClassName("poll1")[0];
    poll2=document.getElementsByClassName("poll2")[0];
    votes=document.getElementsByClassName("votes")[0];
    poll1.style.paddingTop="4%";
    poll2.style.paddingTop="4%";
    poll1.style.paddingBottom="11%";
    poll2.style.paddingBottom="11%";
    if(x==1){
        poll1.style.backgroundColor="#009BFE";
        poll2.style.backgroundColor="#0A4199";
        poll1_count++;
        poll1.style.width=88*poll1_count/(poll1_count+poll2_count)+"%";
        poll2.style.width=88*poll2_count/(poll1_count+poll2_count)+"%";
        poll1.innerHTML="KL Rahul<br>"+Math.round(100*poll1_count/(poll1_count+poll2_count))+"%";
        poll2.innerHTML="Shreyas Iyer<br>"+Math.round(100*poll2_count/(poll1_count+poll2_count))+"%";
    }
    else{
        poll1.style.backgroundColor="#0A4199";
        poll2.style.backgroundColor="#009BFE";
        poll2_count++;
        poll1.style.width=88*poll1_count/(poll1_count+poll2_count)+"%";
        poll2.style.width=88*poll2_count/(poll1_count+poll2_count)+"%";
        poll1.innerHTML="KL Rahul<br>"+Math.round(100*poll1_count/(poll1_count+poll2_count))+"%";
        poll2.innerHTML="Shreyas Iyer<br>"+Math.round(100*poll2_count/(poll1_count+poll2_count))+"%";
    }
    votes.innerHTML=poll1_count+poll2_count+" votes"
}


//-----------------------------------------------------------Player page-----------------------------------------------
function disp_dialog(x){
    document.getElementsByClassName("dialog-box")[0].style.display="block";
    if(x==0){
        document.getElementsByClassName("dialog-box")[0].style.left="60px";
        document.getElementsByClassName("dialog-box")[0].style.top="400px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==1){
        document.getElementsByClassName("dialog-box")[0].style.left="310px";
        document.getElementsByClassName("dialog-box")[0].style.top="400px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==2){
        document.getElementsByClassName("dialog-box")[0].style.left="560px";
        document.getElementsByClassName("dialog-box")[0].style.top="400px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==3){
        document.getElementsByClassName("dialog-box")[0].style.left="60px";
        document.getElementsByClassName("dialog-box")[0].style.top="720px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==4){
        document.getElementsByClassName("dialog-box")[0].style.left="310px";
        document.getElementsByClassName("dialog-box")[0].style.top="720px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==5){
        document.getElementsByClassName("dialog-box")[0].style.left="560px";
        document.getElementsByClassName("dialog-box")[0].style.top="720px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==6){
        document.getElementsByClassName("dialog-box")[0].style.left="810px";
        document.getElementsByClassName("dialog-box")[0].style.top="720px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==7){
        document.getElementsByClassName("dialog-box")[0].style.left="1060px";
        document.getElementsByClassName("dialog-box")[0].style.top="720px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==8){
        document.getElementsByClassName("dialog-box")[0].style.left="1310px";
        document.getElementsByClassName("dialog-box")[0].style.top="720px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==9){
        document.getElementsByClassName("dialog-box")[0].style.left="60px";
        document.getElementsByClassName("dialog-box")[0].style.top="1030px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==10){
        document.getElementsByClassName("dialog-box")[0].style.left="310px";
        document.getElementsByClassName("dialog-box")[0].style.top="1030px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==11){
        document.getElementsByClassName("dialog-box")[0].style.left="560px";
        document.getElementsByClassName("dialog-box")[0].style.top="1030px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==12){
        document.getElementsByClassName("dialog-box")[0].style.left="810px";
        document.getElementsByClassName("dialog-box")[0].style.top="1030px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==13){
        document.getElementsByClassName("dialog-box")[0].style.left="1060px";
        document.getElementsByClassName("dialog-box")[0].style.top="1030px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==14){
        document.getElementsByClassName("dialog-box")[0].style.left="1310px";
        document.getElementsByClassName("dialog-box")[0].style.top="1030px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==15){
        document.getElementsByClassName("dialog-box")[0].style.left="60px";
        document.getElementsByClassName("dialog-box")[0].style.top="1340px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==16){
        document.getElementsByClassName("dialog-box")[0].style.left="310px";
        document.getElementsByClassName("dialog-box")[0].style.top="1340px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==17){
        document.getElementsByClassName("dialog-box")[0].style.left="560px";
        document.getElementsByClassName("dialog-box")[0].style.top="1340px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==18){
        document.getElementsByClassName("dialog-box")[0].style.left="810px";
        document.getElementsByClassName("dialog-box")[0].style.top="1340px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
    else if(x==19){
        document.getElementsByClassName("dialog-box")[0].style.left="1060px";
        document.getElementsByClassName("dialog-box")[0].style.top="1340px";
        document.getElementsByClassName("dialog-box-para")[x].style.display="block";
    }
}
function nodisp_dialog(x){
    document.getElementsByClassName("dialog-box")[0].style.display="none";
    for(i=0;i<20;i++){
        document.getElementsByClassName("dialog-box-para")[i].style.display="none";
    }
}


//-----------------------------------------------------------Rankings-----------------------------------------------
function toggle(x){
    if(document.getElementById(x).style.display!="none"){
        document.getElementById(x).style.display="none";
        document.getElementById(x+'sign').innerHTML="+";
    }
    else{
        document.getElementById(x).style.display="block";
        document.getElementById(x+'sign').innerHTML="-";
    }
}
function maximize(x){
    document.getElementById("window").style.display="block";
    for(i=0;i<12;i++){
        document.getElementsByClassName("windowtable")[i].style.display="none";
    }
    document.getElementsByClassName("windowtable")[x].style.display="";

}
function minimize(){
    document.getElementById("window").style.display="none";
}




//-----------------------------------------------------------Player's Button-----------------------------------------------
function disp_arrow(){
    document.getElementsByClassName("arrow")[0].style.display="inline-block";
}
function nodisp_arrow(){
    document.getElementsByClassName("arrow")[0].style.display="none";
}
function disp_list(){
    document.getElementsByClassName("plist")[0].style.display="block";
}
function nodisp_list(){
    document.getElementsByClassName("plist")[0].style.display="none";
}

//-----------------------------------------------------------Signin-----------------------------------------------
function validate(){
    var usernmae= document.getElementById("uname");
    var password= document.getElementById("upassword");

    if(usernmae.value.trim() == ""){
        window.alert("Blank Username");
        return false;
    }
    else if(password.value.trim() == ""){
        window.alert("Blank Password");
        return false;
    }
    else if(usernmae.value.trim() =="vivek" && password.value.trim() =="vivek32"){
        return true;
    }
    else if(usernmae.value.trim() =="venkat" && password.value.trim() =="venkat21"){
        return true;
    }
    else if(usernmae.value.trim() =="dhanush" && password.value.trim() =="dhanush16"){
        return true;
    }
    else if(usernmae.value.trim() =="harshith" && password.value.trim() =="harshith15"){
        return true;
    }
    else if(usernmae.value.trim() =="sujan" && password.value.trim() =="sujan19"){
        return true;
    }
    else{
        alert("Incorrect credential");
        document.getElementById("invalidPass").style.visibility="visible";
        return false;
    }
}
//-----------------------------------------------------------Signup-----------------------------------------------
function validation()
{
    var username = document.getElementById("input_detalis_n");
    var uemail = document.getElementById("input_detalis_e");
    var upassword = document.getElementById("input_detalis_p");
    var urpassword = document.getElementById("input_detalis_rp");

    if(username.value.trim() == ""){
        window.alert("Blank Username");
        return false;
    }
    else if(uemail.value.trim() == ""){
        window.alert("Blank Email");
        return false;
    }
    else if(upassword.value.trim() == ""){
        window.alert("Blank password");
        return false;

    }
    else if(upassword.value.trim().length<=6){
        window.alert("Password length should be greater 6 characters");
        return false;
    }
    else if(urpassword.value.trim() == ""){
        window.alert("Blank renter-password");
        return false;
    }
    else if(upassword.value.trim() != urpassword.value.trim()){
        window.alert("Password doesn't match");
        return false;
    }
    else{
        return true;
    }
}