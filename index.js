function theBeatlesPlay(muscians, instruments){
  var beatlesPlay = [];
  var i;
  for (i = 0; i < muscians.length && i < instruments.length; i++) {
    beatlesPlay.push( muscians[i] +" plays "+ instruments[i]);
    }  
return beatlesPlay ;
}

function johnLennonFacts(facts){
  var moreFacts = [];
  var i = 0;
  while (i < facts.length){
     moreFacts.push( facts[i] +"!!!");
     i++; 
  }
return moreFacts;  
}

function iLoveTheBeatles (n){
  var theBeatles = [];
  var i = 0;
  do {
    theBeatles.push(n[i] +"I love the Beatles!");
  } while (i < n.length )
  
}











