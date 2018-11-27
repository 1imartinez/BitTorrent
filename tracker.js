//Type your code in this function
function Tracker(){

  let seeds =[];
  let percent = [];

  //implement all six functions below
  function numOfSeeds(){
    let found = 0;
    for(let i=0; i<seeds.lengh; i++){
      if(list [i] !== null){
        found ++;
      }
    }
    return found;
  }





  function addSeed(s){
    seeds.push(s)
  }





  function removeSeed(name){
    let index= 0;
    for(let i = 0; i < seeds.length; i++){
      if(seeds[i] === s){
        
        seeds[i] =null;

        percent[i] = 0;
       }
    }
  }




  function reportHealth(list){
    let sum=0
    for(let i=0; i < list.length; i++){
      if(list [i]!=0){
        sum=sum+list[i];
      }
    }
    return sum/list.length
  }




  function update(){
    Math.random(0,1);
    for(let i=0; i<list.legth; i++)
  }
}




