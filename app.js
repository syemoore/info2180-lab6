window.onload =function (){
    var submit = document.getElementById("final")
    submit.onclick = function(event){
        var entry = document.getElementsByName("searchQuery")[0].value
        event.preventDefault();
        runAjax(entry);
    }

}



function runAjax(def){
    var httpRequest = new XMLHttpRequest();
    var url = "/request.php?q="+def;
    httpRequest.onreadystatechange = function(){
    
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                changeResult(response);
            } else {
                changeResult('There was a problem with the request.');
            }
        }
    }
    httpRequest.open('GET', url, true);
    httpRequest.send();
}

function changeResult(definition){
    var result = document.getElementById("result")
    result.innerHTML = definition;
}