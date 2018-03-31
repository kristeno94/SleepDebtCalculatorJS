// initialize number array of hours slept each day of week
const hoursSlept_Array = [7.3, 6.5, 8.1, 6.8, 9.4, 10.7, 8.2];
// initialize array of strings with days of the week
const daysOfWeek_Array = ['monday', 'tuesday', 'wednesday', 'thursday',
'friday', 'saturday', 'sunday'];
/* function to return hours of sleep I've gotten last week, accepts a string
parameter with the day of the week*/
function getSleepHours (dayOfWeek){
  // turn string to lower case for switch cases
  dayOfWeek = dayOfWeek.toLowerCase();
  // return error message if srting parameter has no match in daysOfWeek_Array
  if (daysOfWeek_Array.includes(dayOfWeek) == false)
  {
    return 'ERROR:  parameter must be a valid day of the week';
  }
  // else find the element in daysOfWeek_Array that matches dayOfWeek
  else
    {
      // return the element in hoursSlept_Array that corresponds to dayOfWeek
      return hoursSlept_Array[daysOfWeek_Array.indexOf(dayOfWeek)];
    }
  } // end getSleepHours function
  // test getSleepHours
  console.log('getSleepHours Testing');
  console.log(`expected output: 9.4    actual output: ${getSleepHours('FRIdaY')}`);
  console.log(`expected output: 8.1    actual output: ${getSleepHours('wEdNESday')}`);
  console.log(`expected output: 6.5    actual output: ${getSleepHours('thuRsdaY')}`);
  console.log(`expected output: 6.8    actual output: ${getSleepHours('thursdaY')}`);
  console.log(`expected output: 7.3    actual output: ${getSleepHours('mOnDAY')}`);
  console.log(`expected output: 10.7   actual output: ${getSleepHours('saturDAY')}`);
  console.log(`expected output: 8.2    actual output: ${getSleepHours('sunDAY')}`);
  console.log(`expected output: [error message] \nactual output: ${getSleepHours('CATURDAY')}`);
  console.log('--------------------------------------');
  // test getSleepHours
  // function that returns the total amount of sleep hours slept in the week
  function getActualSleepHours () {
    // initialize numebr variable to store added sleep hours from getSleepHours
    let totalHours = 0;
    // iterate over daysOfWeek_Array to call getSleepHours and add result to totalHours
    for (i = 0; i < daysOfWeek_Array.length; i ++)
    {
      totalHours += getSleepHours(daysOfWeek_Array[i]);
    }
    return totalHours;
  } // end getActualSleepHours function

  // test getActualSleepHours
  console.log('getActualSleepHours Testing');
  console.log(`expected output: 57     actual output: ${getActualSleepHours()}`);
  console.log('--------------------------------------');
  // end getActualSleepHours testing
  /* function to set ideal number of hours slept in a week, accepts numeric parameter */
  function getIdealSleepHours(hours) {
    // return total amount of ideal hours in the week
    return hours * 7;
  } // end getIdealSleepHours function

  // test getIdealSleepHours
  console.log('getIdealSleepHours Testing');
  console.log(`expected output: 59.5     actual output: ${getIdealSleepHours(8.5)}`);
  console.log(`expected output: 70     actual output: ${getIdealSleepHours(10)}`);
  console.log(`expected output: 31.5     actual output: ${getIdealSleepHours(4.5)}`);
  console.log('--------------------------------------');// function that returns amount of sleep hours missed in the week
function calculateSleepDebt() {
  // initialize number variables to store difference between getActuaSleepHours and getIdealSleepHours
  let idealSleepHours = getIdealSleepHours();
  let actualSleepHours = getActualSleepHours();
  let sleepHoursDifference = idealSleepHours - actualSleepHours;
  // determine amount of sleep debt with sleepHoursDifference
  	// no sleep debt
  if (sleepHoursDifference== 0)
  {
    return "This week you have accumulated no sleep debt.";
  }
  // negative sleep debt
  else if (sleepHoursDifference < 0)
  {
    return "This week you have overslept " + sleepHoursDifference.toString() + " hours."
  }
    // positive sleep debt
  else
    {
      return "This week you have accumulated " + Math.abs(sleepHoursDifference).toString() + " hours of sleep debt.";
    }
};

// test calculateSleepDebt
console.log('calculateSleepDebt Testing');
// positive sleep best
console.log(`expected output: have 2.5 hours of sleep debt\nactual output: ${calculateSleepDebt(8.5)}`);
// 
console.log('--------------------------------------');
// end calculateSleepDebt testing
