$.ajax({
	url:'http://localhost:9000/notes/',
	dataType:'json',
	success:function(data){
		console.log(data)
	}
	// type:'get'
});