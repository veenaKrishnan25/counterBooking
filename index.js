


let count = 0;
      let saveEl = document.getElementById("save-el") 
      let countEl = document.getElementById("count-el")

        function increment() {
            count += 1;
            countEl.textContent = count;

        }
        increment();
        function save(){
            console.log(count);
            let countStr = count + " - ";
            saveEl.textContent += countStr;
            countEl.textContent = 0;
            count = 0;

        }

        // document.addEventListener('DOMContentLoaded', function() {
        //     countEl.addEventListener("click", increment);
        // });

          