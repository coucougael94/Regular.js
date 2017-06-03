String.prototype.replaceAll = function(search, replacement) {var target = this;return target.replace(new RegExp(search, 'g'), replacement);};

var ht = $('.regular').prop('outerHTML'), indexEnd = 0;
for(var i=0;i<document.getElementsByClassName('regular').length;i++){

	var argsLists	= $('.regular').attr('data-make'),
		inside_ = [],
		arg="";

	for(var j = 1;j<argsLists.split('(').length;j++){
		inside_[j]=ht;
		arg = argsLists.split('(')[j];

		var propList = arg.substring(1, arg.length-1).split(';');

		propList.forEach(function(element) {
			inside_[j] = inside_[j].replaceAll('{%'+element.split('=')[0]+'%}', element.split('=')[1]);
		});
	}
	ht = inside_.join('');
	//Pour enlever les class regular, décommentez :
		//ht = ht.replaceAll('class="regular" ', '');

	//Pareil mais pour l'attribut data-make
		//ht = ht.replaceAll($(this).attr('data-make'), '');
}
$('.regular').prop('outerHTML', ht);
