function back(){
    window.location="activity_1.html";
}

function get_score(){
    score=localStorage.getItem("score");
    document.getElementById("update").innerHTM="<h1> score: "+ score+"</h1>";
}