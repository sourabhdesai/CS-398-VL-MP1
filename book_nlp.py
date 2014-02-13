__author__ = 'sourabhdesai'
import nltk
import json
import re
from nltk.corpus import stopwords
# nltk.download()

def lowercase(tokens):
    return [w.lower() for w in tokens] #change to lower case

def removeStopWords(tokens):
    return [ word for word in tokens if word not in stopwords.words('english') ]

def removePeriods(tokens):
    return [re.sub('\.','',w) for w in tokens] #remove periods

def removeNonWords(tokens):
    return [w for w in tokens if w.isalpha()] #just keep words

def stemWords(tokens):
    return [nltk.PorterStemmer().stem(t) for t in tokens]

def clean(tokens):
    return stemWords( removeStopWords( removeNonWords( removePeriods( lowercase( tokens ) ) ) ) );

from nltk.book import *
from nltk.corpus import PlaintextCorpusReader
wordlists = PlaintextCorpusReader("", "ofk_ch[1234]\.txt")
wordlists.fileids()
print(wordlists.words("ofk_ch1.txt"))
for i in range(1,5):
    ch_words = clean( wordlists.words("ofk_ch" + str(i) + ".txt") )
    ch_words = nltk.pos_tag(ch_words)
    ch_freq = FreqDist(ch_words)
    ch_table = [ dict(word=w,freq=ch_freq[w]) for w in ch_freq ]
    with open("data" + str(i) + ".json", "w") as outfile:
         json.dump(ch_table, outfile, sort_keys = True, indent = 4,
    ensure_ascii=False)
    print( "Chapter " + i + " Done")