var fs = require('fs');
var chapter1 = require('./data1.json'); // This should be changed to require('../data1.json')
var chapter2 = require('./data2.json'); // This should be changed to require('../data2.json')
var chapter3 = require('./data3.json'); // This should be changed to require('../data3.json')
var chapter4 = require('./data4.json'); // This should be changed to require('../data4.json')

/** Parts of Speech Abbreviation Translation

ADJ	adjective		new, good, high, special, big, local
ADV	adverb			really, already, still, early, now
CNJ	conjunction		and, or, but, if, while, although
DET	determiner		the, a, some, most, every, no
EX	existential		there, there's
FW	foreign word	dolce, ersatz, esprit, quo, maitre
MOD	modal verb		will, can, would, may, must, should
N	noun			year, home, costs, time, education
NP	proper noun		Alison, Africa, April, Washington
NUM	number			twenty-four, fourth, 1991, 14:24
PRO	pronoun			he, their, her, its, my, I, us
P	preposition		on, of, at, with, by, into, under
TO	the word to		to
UH	interjection	ah, bang, ha, whee, hmpf, oops
V	verb			is, has, get, do, make, see, run
VD	past tense		said, took, told, made, asked
VG	present participle	making, going, playing, working
VN	past participle	given, taken, begun, sung
WH	wh determiner	who, which, when, what, where, how

*/

function convertPOSTag(pos) {
	
	switch(pos) {

		case "ADJ":
			return "Adjective";
		case "ADV":
			return "Adverb";
		case "CNJ":
			return "Conjunction";
		case "DET":
			return "Determiner";
		case "EX":
			return "Existential";
		case "FW":
			return "Foreign Word";
		case "MOD":
			return "Modal Verb";
		case "N":
			return "Noun";
		case "NP":
			return "Proper Noun";
		case "NUM":
			return "Number";
		case "PRO":
			return "Pronoun";
		case "P":
			return "Preposition";
		case "TO":
			return "The Word To";
		case "UH":
			return "Interjection";
		case "V":
			return "Verb";
		case "VD":
			return "Past Tense";
		case "VG":
			return "Present Participle";
		case "VN":
			return "Past Participle";
		case "WH":
			return "WH Determiner";
	}

}

var POSArray = [];

chapter1.forEach(function (element) {
	element.chapter = 1;
	wordarray       = element.word;
	element.word    = wordarray[0];
	element.pos     = wordarray[1];
	if (POSArray.indexOf(element.pos) == -1) {
		POSArray.push(element.pos);
	}
});

chapter2.forEach(function (element) {
	element.chapter = 2;
	wordarray       = element.word;
	element.word    = wordarray[0];
	element.pos     = wordarray[1];
	if (POSArray.indexOf(element.pos) == -1) {
		POSArray.push(element.pos);
	}
});

chapter3.forEach(function (element) {
	element.chapter = 3;
	wordarray       = element.word;
	element.word    = wordarray[0];
	element.pos     = wordarray[1];
	if (POSArray.indexOf(element.pos) == -1) {
		POSArray.push(element.pos);
	}
});

chapter4.forEach(function (element) {
	element.chapter = 4;
	wordarray       = element.word;
	element.word    = wordarray[0];
	element.pos     = wordarray[1];
	if (POSArray.indexOf(element.pos) == -1) {
		POSArray.push(element.pos);
	}
});

var chapters = chapter1.concat(
				chapter2.concat(
					chapter3.concat(
						chapter4
						)
					)
				);

fs.writeFile("datafull.json", JSON.stringify(chapters,null,'\t') , function (err) {
	// Save in same directory as this .js file
    if(err) {
        console.log(err);
    } else {
        console.log("datafull.json was saved!");
    }
});

fs.writeFile("datapostags.json", JSON.stringify(POSArray,null,'\t'), function (err) {
	// Save in same directory as this .js file
    if(err) {
        console.log(err);
    } else {
        console.log("datapostags.json was saved!");
    }
});