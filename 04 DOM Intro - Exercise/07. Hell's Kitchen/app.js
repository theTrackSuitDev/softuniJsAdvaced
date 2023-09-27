function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inputElement = document.querySelector('#inputs textarea');
      let inputString = inputElement.value;
      let inputArray = JSON.parse(inputString);
      let restaurantsObject = {};
      let iD = 1;

         for (const restaurant of inputArray) {
         let [name, workers] = restaurant.split(' - ');
         let workersArray = workers.split(', ').map(el => el.split(' '));
         workersArray.forEach(element => {
            element[1] = Number(element[1]);
         });
         
         if (!restaurantsObject.hasOwnProperty(name)) {
            restaurantsObject[name] = {};
            restaurantsObject[name].workers = workersArray;
            restaurantsObject[name].id = iD;
            iD++;
         } else {
            restaurantsObject[name].workers = restaurantsObject[name].workers.concat(workersArray);
         }

         let [avg, best] = getAvgAndBest(restaurantsObject[name].workers);

         restaurantsObject[name].avg = avg;
         restaurantsObject[name].best = best;
      }

      let restObjArr = Object.entries(restaurantsObject);
      restObjArr.sort((a, b) => b[1].avg - a[1].avg || a[1].id - b[1].id);

      let bestWorkers = restObjArr[0][1].workers.sort((a, b) => b[1] - a[1]);

      let bestName = restObjArr[0][0];
      let bestAvg = restaurantsObject[bestName].avg;
      let bestSalary = restaurantsObject[bestName].best;

      let bestRestaurantString = `Name: ${bestName} Average Salary: ${bestAvg.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      let bestRestaurantElement = document.querySelector('#bestRestaurant p');
      bestRestaurantElement.textContent = bestRestaurantString;
      
      let bestWorkersString = '';
      bestWorkers.forEach(element => {
         bestWorkersString += `Name: ${element[0]} With Salary: ${element[1]} `
      });
      let bestWorkersElement = document.querySelector('#workers p');
      bestWorkersElement.textContent = bestWorkersString.trim()

      function getAvgAndBest(workersArray) {
         let total = 0;
         let avg = 0;
         let best = 0;
         for (const el of workersArray) {
            let wage = Number(el[1]);
            total += wage;
            if (wage > best) {
               best = wage;
            }
         }

         avg = total / workersArray.length;
         return [avg, best];
      }
   }
}