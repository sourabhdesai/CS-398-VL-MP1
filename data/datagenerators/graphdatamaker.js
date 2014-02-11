function objectify(source, target, type) {
	return {
		source: source,
		target: target,
		type  : type
	};
}

var ColorPicker = function(total) {
	this.increment = Math.round(255 / total);
	this.red = 0;
	this.green = 0;
	this.blue = 0;
	this.colorCount = 0;

	ColorPicker.prototype.getNextHex = function() {
		var hexstring = to_rgb(this.red, this.green, this.blue);
		switch(this.colorCount) {
			case 0:
				this.red = (this.red + this.increment);
				if(this.red >= 255) this.colorCount = -1;
				else this.colorCount = (this.colorCount + 1) % 3;
				break;
			case 1:
				this.green = (this.green + this.increment);
				if(this.green >= 255) this.colorCount = -1;
				else this.colorCount = (this.colorCount + 1) % 3;
				break;
			case 2:
				this.blue = (this.blue + this.increment);
				if(this.blue >= 255) this.colorCount = -1;
				else this.colorCount = (this.colorCount + 1) % 3;
				break;
		}
		return hexstring;
	};

	function convert(integer) { 
    	var str = Number(integer).toString(16); 
    	return str.length == 1 ? "0" + str : str; 
	}

	function to_rgb(r, g, b) {
		return "#" + convert(r) + convert(g) + convert(b);
	}
}

// Start creating dataset

var FULL_DATA      = require('./datachapters.json');
var TOP_NUMBER     = 30;
var fs             = require('fs');
var graphDataArray = new Array(5*TOP_NUMBER);
var count          = 0;
var chapterStrings = ["null", "one", "two", "three", "four"];

for(var i = 0; i < TOP_NUMBER; i++) {
	graphDataArray[count] = objectify(FULL_DATA[i].word, FULL_DATA[i].pos, "pos"); // Edge from word to POS
	count++;
	var elem = FULL_DATA[i];
	for(var a = 0; a < elem.chapter.length; a++) {
		graphDataArray[count] = objectify(elem.word, "Chapter " + elem.chapter[a], chapterStrings[elem.chapter[a]]);
		count++;
	}
}

for(var i = 0; i < graphDataArray.length; i++) {
	if(graphDataArray[i] == null) 
		graphDataArray.splice(i, graphDataArray.length - i);
}

fs.writeFile("graphdata.json", JSON.stringify(graphDataArray, null, '\t'), function (err){
	if(err) console.log(err);
	else console.log("graphdata.json has been saved!");
});

