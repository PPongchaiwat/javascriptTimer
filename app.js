function countDown(time) {

    let timer = setInterval(function() {
        time--;
        if(time<=0){
            clearInterval(timer);
            console.log("DONE");
        }
        else {
            console.log(time);
        }
    }
    , 1000);
}

function randomGame(){
    let num;
    let time = 0;
    let timer = setInterval(function(){
      num = Math.random();
      time++
      if(num > 0.75) {
        clearInterval(timer);
        console.log("It took " + time + " tries.");
      }
    },1000)
  }
