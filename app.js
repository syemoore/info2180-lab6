window.onload =function (){
    let lookup= document.getElementById("lookup")
    lookup.onclick = function(event){
        event.preventDefault();
        runAjax("definition");
    }

}

function runAjax(def){
    var httpRequest = new XMLHttpRequest();
    var url = "/request.php?q="+def;
    httpRequest.onreadystatechange = function(){
    
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                alert(response);
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
    httpRequest.open('GET', url);
    httpRequest.send();
}