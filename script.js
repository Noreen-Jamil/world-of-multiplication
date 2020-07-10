function find(){
	
	let sectionParagraph = document.querySelector('section p');
	

	 let tableName = document.querySelector('#tableName').value;
	
	let maxLength = document.querySelector('#maxLength').value;
	
	let tableHeading = document.querySelector('section h1');
	
	if(tableName == "" || maxLength ==""){
		tableHeading.innerHTML = "Table Name And Maximum Length are required";
	}else
	{
	tableHeading.innerHTML = "Table Of " + tableName;

	 for (var i = 1 ; i <= maxLength; i++) {

	 	sectionParagraph.innerHTML+= tableName + ' * ' + i + ' = ' + tableName*i + "<br>";
	 	 
	 }
	 }
	
}
