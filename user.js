//Type your code inside this function
function User(tracker, torrent){

  let myTracker = tracker;
  let myTorrent = torrent;
  let state = "leech";
  let downloadSpeed = 0;
  let uploadSpeed = 0;

  //Type all of your code in here.
  function startDownload(){


  }


  function updateTracker(){
    
  }


  function checkProgress(){
    function range(list){
      let min = findMin(list);
      let max = findMax(list);

      return [min,max]
    }
    function findMax(list){
      let max = list(0);
      for(let i=0; i < torrent.length; i++){
        if(list[i] > max){
          max = list[i]
        }
      }
      return max
    }
    function findMin(list){
      let min = list(0);
      for(let i=0; i < torrent.length; i++){
        if(list[i] > min){
          min = list[i]
        }
      }
      return min
    }
  }


  function leech(){
    state = "leech";
    downloadSpeed = Math.random();
    uploadSpeed = 0;

  }

  function seed(){
      state = "seed";
      downloadSpeed ;
      uploadSpeed;

  }


}