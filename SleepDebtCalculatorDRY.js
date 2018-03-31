/* function to return hours of sleep I've gotten last week
 accepts string parameters with days of the week or their abbreviation*/
function getSleepHours (dayOfWeek){
  // turn string to lower case for switch cases
  dayOfWeek = dayOfWeek.toLowerCase();
  // error option eliminated before switch even begins
  if (dayOfWeek != 'monday' && dayOfWeek != 'tuesday' && dayOfWeek != 'wednesday'
&& dayOfWeek != 'thursday' && dayOfWeek != 'friday' && dayOfWeek != 'saturday'
&& dayOfWeek != 'sunday')
{
  return 'ERROR: '
}
// keep code nice and dry with switch instead of if / then
  switch(dayOfWeek)
  {
    case 'monday':
    return 7.3;
    break;
    case 'tuesday':
    return 6.8;
    break;
    case 'wednesday':
    return 8.1;
    break;
    case 'thursday':
    return 6.8;
    break;
    case 'friday':
    return .4;
    break;
    case 'saturday':
    return 10.7;
    break;
    case 'sunday':
    return 8.2;
    break;
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
function getActualSleepHours() {
  //  added hours slept each day of the week from getSleepHours
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

}; // end getActualSleepHours function

// test getActualSleepHours
console.log('getActualSleepHours Testing');
console.log(`expected output: 56     actual output: ${getActualSleepHours()}`);
console.log('--------------------------------------');
// end getActualSleepHours testing
/* function to set ideal number of hours slept in a week, accepts numeric parameter */
function getIdealSleepHours (hours) {
  // return total amount of ideal hours in the week
  return hours * 7;
} // end getIdealSleepHours function

// test getIdealSleepHours
console.log('getIdealSleepHours Testing');
console.log(`expected output: 59.5     actual output: ${getIdealSleepHours(8.5)}`);
console.log(`expected output: 70     actual output: ${getIdealSleepHours(10)}`);
console.log(`expected output: 31.5     actual output: ${getIdealSleepHours(4.5)}`);
console.log('--------------------------------------');
// end getIdealSleepHours testing
// function that returns amount of sleep hours missed in the week
function calculateSleepDebt(idealHours) {
  // initialize number variables to store difference between getActuaSleepHours and getIdealSleepHours
  let idealSleepHours = getIdealSleepHours(idealHours);
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
	// positive sleep debt
console.log(`expected output: have 2.5 hours of sleep debt\nactual output: ${calculateSleepDebt(8.5)}`);
	// negative sleep debt
console.log(`expected output: have overslept 29 hours\nactual output: ${calculateSleepDebt(4)}`);
	// no sleep debt
console.log(`expected output: no sleep debt\nactual output: ${calculateSleepDebt(8)}`);
console.log('--------------------------------------');
// end calculateSleepDebt testing
