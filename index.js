var xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.eu/rest/v2/all");
xhr.onload=function(){
    var t=JSON.parse(this.response);
    let navigation=document.createElement('div');
    navigation.setAttribute('class','navigate')
    navigation.innerHTML=`<h1>COUNTRIES</h1>`
    document.body.append(navigation);
    let outer=document.createElement('div');
    outer.setAttribute('class','outerbox');
    document.body.append(outer);
    function flags(objects){
        let info=document.createElement('div');
        info.setAttribute("class","container");
        info.innerHTML=`<img src=${objects.flag}>
        <h2>${objects.name}</h2> 
        <p><span class="bold">Population :</span> ${objects.population}</p>
        <p><span class="bold">Region :</span> ${objects.region}</p>
        <p><span class="bold">Capital :</span> ${objects.capital}</p>`
        outer.appendChild(info);
    }
    for(var i=0;i<t.length;i++){
        flags(t[i])
    }
}
 xhr.onerror=function(){
    console.log("Error",this.statusText);
}
xhr.send();
