

var L = [];
function randCar() {
    let r = 0;
    let i = 1;
    for (i = 1; i <= 5; i++) {
        r = Math.floor(Math.random() * 2);
        const placeId = document.getElementById(`place${i}`);
        placeId.innerText = r;
        if (r==1){
            placeId.innerHTML='<img src="gray1.png" alt="">';
        }
        
        L.push(r);
    }
    for (i = 6; i <= 10; i++) {
        r = Math.floor(Math.random() * 2);
        const placeId = document.getElementById(`place${i}`);
        placeId.innerText = r;
        if (r==1){
            placeId.innerHTML='<img src="gray.png" alt="">';
        }
        
        L.push(r);
    }
}

randCar();
var O = [];
function suggest() {
    const LLeft = L.slice(0, 5);
    const LRight = L.slice(5, 10);
    console.log(LLeft);
    console.log(LRight);
    for (let i = 0; i < 5; i++) {
        if (L[i + 5] == 0) {
            O.push(i + 5);
            console.log(true)
        } else if (L[i] == 0) {
            O.push(i);
        }

    }
}

suggest();

function myMove(elem) {
    let id = null;
    console.log(elem) ;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 200) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.bottom = pos + "px"; 
        
      }
    }
  }


var s = 0;
function park() {

    for (let i = 0; i < 10; i++) {
        (function (j) {

            if (L[j] == 0) {

                const placeId = document.getElementById(`place${j + 1}`);
        
                placeId.addEventListener("click",  () => {
                    if (s == 0) {
                        L[j] = 2;
                        placeId.innerText = 2;
                        placeId.innerHTML='<img id="animate" src="red.png" alt="">';
                        const carId = document.getElementById('animate');
                        myMove(carId);
                        s++;
                    }
                }, { once: true });
                
            }

        })(i);
    }
}
park();

