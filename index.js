function theBeatlesPlay(muscians, instruments){
  var beatlesPlay = []
  var i
  for (i = 0; i < muscians.length && i < instruments.length; i++) {
    beatlesPlay.push( muscians[i] +" plays "+ instruments[i])
    }  
return beatlesPlay 
}

function johnLennonFacts(){
  var facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"]
  var i 
  while (i < facts.length){
     moreFacts = facts.push( facts[i] +" !!! ")
  }
return morefacts  
}