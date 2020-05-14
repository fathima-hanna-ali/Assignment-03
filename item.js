var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
	if(this.readyState==4&&this.status==200){
		const queryStding = window.location.search;
		const urlParams = new URLSearchParams(queryStding);
		const product = urlParams.get('getID');
		document.getElementById("name").innerHTML = product;
		console.log("test"+product);
		var output = "<table class=\"table\"><tr><td><b>Serial Number</td><td><b>Name</td><td><b>Quantity</td><td><b>unit </td><td><b>Department</td><td><b>Notes</td></tr>";

		var response = JSON.parse(this.responseText);
		var List = response.items;

		if(product=="Items")
		{
			for(var i=0; i<List.length; i++)
		{
				output += "<tr><td>"+List[i].SerialNumber+"</td><td>"+List[i].Name+"</td><td>"+List[i].Quantity+"</td><td>"+List[i].Unit+"</td><td>"+List[i].Department+"</td><td>"+List[i].Notes+"</td></tr>";

		}
		}

		for(var i=0; i<List.length; i++)
		{
			if(List[i].Department == product)
			{
				output += "<tr><td>"+List[i].SerialNumber+"</td><td>"+List[i].Name+"</td><td>"+List[i].Quantity+"</td><td>"+List[i].Unit+"</td><td>"+List[i].Department+"</td><td>"+List[i].Notes+"</td></tr>";
			}

		}
		document.getElementById("list").innerHTML = output;
		console.log(output);

	}
}
xhttp.open("GET","itemlist.json",true);
xhttp.send();