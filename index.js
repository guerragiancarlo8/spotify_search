window.onload = function(){//index.js goes here
	var htmlElement = document.getElementById('container')
	console.log(htmlElement)

	var searchArtist = function(query){

		$.ajax({

			url:'https://api.spotify.com/v1/search',
			data: {

				q: query,
				type:'artist'
			},
			success: function(response){

				//remove elements from div
				while(htmlElement.firstChild){
					htmlElement.removeChild(htmlElement.firstChild)
				}
				
				//add name
				var p = document.createElement("p")
				var nombre = document.createTextNode(response.artists.items[0].name)
				p.appendChild(nombre)
				var currdiv = document.getElementById("container")
				currdiv.appendChild(p)

				//add the button to pull the albums
				var b = document.createElement("BUTTON")
				b.class = "btn btn-primary btn-lg"
				b.data-toggle = "modal"
				b.data-target = "#modal"
				currdiv.appendChild(b)

				//add images
				var array = response.artists.items[0].images

				for(var a = 0; a<array.length; a++){
					console.log(array[a])
					var i = document.createElement("img")
					i.src = array[a]["url"]
					i.height = 200
					i.width = 200
					document.getElementById("container").appendChild(i)
				}
			}
		})
	}

	var searchAlbums = function(query){

		$.ajax({
			url: 'https://api.spotify.com/v1/search',
			data: {

				q:query,
				type: 'album'
			}

			success: function(response){

				//do something with the albums

			}
		})
	}

	document.getElementById('search-form').addEventListener('submit',function(e){

		e.preventDefault();
		searchArtist(document.getElementById('query').value);
	},false);
};