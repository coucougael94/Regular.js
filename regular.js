
String.prototype.replaceAll = function(search, replacement) {var target = this;return target.replace(new RegExp(search, 'g'), replacement);};

var //ht 			= $('.regular').prop('outerHTML'),
	classList	= document.getElementsByClassName('regular'),
	indexEnd 	= 0,
	classList_length = classList.length;

for(var i=0;i < classList_length;i++){

	var ht = classList[i].outerHTML,
		argsLists	= classList[i].getAttribute('data-make'),
		inside_ = [],
		arg="";

	for(var j = 1;j<argsLists.split('(').length;j++){
		inside_[j]=ht;
		arg = argsLists.split('(')[j];

		var propList = arg.substring(0, arg.length-1).split(';');

		propList.forEach(function(element) {
			inside_[j] = inside_[j].replaceAll('{%'+element.split('=')[0]+'%}', element.split('=')[1]);
		});
	}
	ht = inside_.join('');
	//Pour enlever les class regular, décommentez :
		//ht = ht.replaceAll('class="regular" ', '');

	//Pareil mais pour l'attribut data-make
		//ht = ht.replaceAll(classList[i].getAttribute('data-make'), '');
	classList[i].outerHTML = ht;
}
