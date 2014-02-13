var datafull = require('./datafull.json'); // This should be changed to require('../datafull.json')
datafull = datafull.splice(datafull.length/100, (99*datafull.length)/100);
var fs = require('fs');

 var array = [];

for(var a = 0; a < datafull.length; a++) {
	var element = datafull[a];
	element.chapter = [element.chapter];
	for(var i = a+1; i < datafull.length; i++) {
		if(element.word == datafull[i].word && element.chapter.indexOf(datafull[i].chapter) == -1) {
			element.chapter.push(datafull[i].chapter);
			element.freq += datafull[i].freq;
			datafull[i].freq = 0;
		}
	}
	array.push(element);
}

array.sort(function (a,b) {
	return b.freq - a.freq;
});


for(var i = 0; i < array.length; i++) {
	if(array[i].freq == 0 ) {
		array.splice(i,array.length - i);
		break;
	}
}

console.log(array[array.length-1]);

fs.writeFile("datachapters.json", JSON.stringify(array,null,'\t') , function (err) {
	// Save in same directory as this .js file
    if(err) {
        console.log(err);
    } else {
        console.log("datachapters.json was saved!");
    }
});