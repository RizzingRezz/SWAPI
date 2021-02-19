//------------------------------------------------------------------------------PLANETS------------------------------------------------------------------------------
for (let i = 1; i < 7; i++) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
			var json  = JSON.parse(this.responseText);
			for (let i = 0; i < json.results.length; i++) {
				var element = document.getElementById("Planet");
				element.innerHTML +=  "<tr><td>" +json.results[i].name + "</td><td>" +json.results[i].population + "</td><td>" +json.results[i].climate +"</td><td>" +json.results[i].diameter +"</td><td>" +json.results[i].gravity +"</td><td>" +json.results[i].terrain + "</td></tr>" ;
			}
		}
	};
	if ( i === 1){
		request.open("GET", "https://swapi.dev/api/planets/");
	}else{
		request.open("GET", "https://swapi.dev/api/planets/?page="+i);
	}
	request.send();
}



//------------------------------------------------------------------------------STARSHIPS----------------------------------------------------------------------------
for (let i = 1; i < 5; i++) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
			var json  = JSON.parse(this.responseText);
			for (let i = 0; i < json.results.length; i++) {
				var element = document.getElementById("Starships");
				element.innerHTML +=  "<tr><td>" +json.results[i].name + "</td><td>" +json.results[i].model + "</td><td>" +json.results[i].manufacturer +  "</td><td>" +json.results[i].cost_in_credits + "</td><td>"+json.results[i].crew +"</td><td>" +json.results[i].passengers +"</td></tr>" ;
			}
		}
	};
	if ( i === 1){
		request.open("GET", "https://swapi.dev/api/starships/");
	}else{
		request.open("GET", "https://swapi.dev/api/starships/?page="+i);
	}
	request.send();
}



//------------------------------------------------------------------------------PEOPLES------------------------------------------------------------------------------
for (let i = 1; i < 10; i++) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
			var json  = JSON.parse(this.responseText);
			for (let i = 0; i < json.results.length; i++) {
				var element = document.getElementById("People");
				element.innerHTML +=  "<tr><td>" +json.results[i].name + "</td><td>" +json.results[i].height + "</td><td>" +json.results[i].gender +  "</td><td>" +json.results[i].hair_color + "</td><td>"+json.results[i].skin_color +"</td><td>" +json.results[i].eye_color +"</td><td>" +json.results[i].birth_year +"</td></tr>" ;
			}
		}
	};
	if ( i === 1){
		request.open("GET", "https://swapi.dev/api/people/");
	}else{
		request.open("GET", "https://swapi.dev/api/people/?page="+i);
	}
	request.send();
}



//------------------------------------------------------------------------------SPECIES------------------------------------------------------------------------------
for (let i = 1; i < 5; i++) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
			var json  = JSON.parse(this.responseText);
			for (let i = 0; i < json.results.length; i++) {
				var element = document.getElementById("Species");
				element.innerHTML +=  "<tr><td>" +json.results[i].name + "</td><td>" +json.results[i].classification + "</td><td>" +json.results[i].designation +  "</td><td>" +json.results[i].hair_colors + "</td><td>"+json.results[i].skin_colors +"</td><td>" +json.results[i].eye_colors +"</td><td>" +json.results[i].language +"</td></tr>" ;
			}
		}
	};
	if ( i === 1){
		request.open("GET", "https://swapi.dev/api/species/");
	}else{
		request.open("GET", "https://swapi.dev/api/species/?page="+i);
	}
	
	request.send();
}


//------------------------------------------------------------------------------VEHICULES----------------------------------------------------------------------------
for (let i = 1; i < 5; i++) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
			var json  = JSON.parse(this.responseText);
			for (let i = 0; i < json.results.length; i++) {
				var element = document.getElementById("Vehicules");
				element.innerHTML +=  "<tr><td>" +json.results[i].name + "</td><td>" +json.results[i].model + "</td><td>" +json.results[i].manufacturer +  "</td><td>" +json.results[i].cost_in_credits + "</td><td>"+json.results[i].crew +"</td><td>" +json.results[i].passengers +"</td></tr>" ;
			}
		}
	};
	if ( i === 1){
		request.open("GET", "https://swapi.dev/api/vehicles/");
	}else{
		request.open("GET", "https://swapi.dev/api/vehicles/?page="+i);
	}
	
	request.send();
}


//------------------------------------------------------------------------------SERVICE WORKERS----------------------------------------------------------------------
const cacheName = "cache-v1";
const assets = ['/','/index.html','/src/style.css','/src/script.js','/src/logo.png','/src/space.jpg'];

//register cache
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/script.js")
    .then(() => console.log("sw registered"))
    .catch((err) => console.log(err));
}

// install cache
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

// fetch cache
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cache) => {
      return cache || fetch(e.request);
    })
  );
});


//------------------------------------------------------------------------------AFFICHAGE----------------------------------------------------------------------------
function Display(thingId)
{
	var targetElement = document.getElementById(thingId);
	if(targetElement.style.display == "none"){
		targetElement.style.display = "" ;
	}
	else{
		targetElement.style.display = "none" ;
	}       
}

