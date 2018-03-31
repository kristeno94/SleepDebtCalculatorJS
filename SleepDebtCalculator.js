// function to return hours of sleep I've gotten last week
// accepts string parameters with days of the week or their abbreviation
const getSleepHours = (dayOfWeek) => {
  // turn string to lower case for if/then comparison
  dayOfWeek = dayOfWeek.toLowerCase();
  if (dayOfWeek == 'monday' || dayOfWeek == 'm' || dayOfWeek == 'mon')
  {
    return 7.3;
  }
  else if (dayOfWeek == 'tuesday' || dayOfWeek == 't' || dayOfWeek == 'tues')
  {
    return 6.5;
  }
  else if (dayOfWeek == 'wednesday' || dayOfWeek == 'w' || dayOfWeek == 'wed')
  {
    return 8.1;
  }
  else if (dayOfWeek == 'thursday' || dayOfWeek == 'th' || dayOfWeek == 'thur')
  {
    return 6.8;
  }
  else if (dayOfWeek == 'friday' || dayOfWeek == 'f' || dayOfWeek == 'fri')
  {
    return 9.4;
  }
  else if (dayOfWeek == 'saturday' || dayOfWeek == 's' || dayOfWeek == 'sat')
  {
    return 9.7;
  }
  else if (dayOfWeek == 'sunday' || dayOfWeek == 's' || dayOfWeek == 'sun')
  {
    return 8.2;
  }
  else
  {
    return 'ERROR: parameter must be a valid day of the week';
  }
  /* if else is very repetitive but allows for more variation in parameter names
  whether this is really necessary or not, it is up to the actual programmer*/
}; // end getSleepHours function

// test getSleepHours
console.log('getSleepHours Testing');
console.log(`expected output: 9.4    actual output: ${getSleepHours('FRIdaY')}`);
console.log(`expected output: 8.1    actual output: ${getSleepHours('wEd')}`);
console.log(`expected output: 6.5    actual output: ${getSleepHours('t')}`);
console.log(`expected output: 6.8    actual output: ${getSleepHours('THUR')}`);
console.log(`expected output: 7.3    actual output: ${getSleepHours('mOn')}`);
console.log(`expected output: 9.7    actual output: ${getSleepHours('s')}`);
console.log(`expected output: 8.2    actual output: ${getSleepHours('sunDAY')}`);
console.log(`expected output: [error message] \nactual output: ${getSleepHours('not a day of the week')}`);
console.log('--------------------------------------');
// end getSleepHours testing

// function that returns the total amount of sleep hours slept in the week
const getActualSleepHours = () =>{
  // return added hours slept each day of the week from getSleepHours
  let totalHours = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  return totalHours;
}; // end getActualSleepHours function

// test getActualSleepHours
console.log('getActualSleepHours Testing');
console.log(`expected output: 56     actual output: ${getActualSleepHours()}`);
console.log('--------------------------------------');
// end getActualSleepHours testing
/* function to set ideal number of hours slept in a week, accepts numeric parameter */
const getIdealSleepHours = (hours) => {
  // return total amount of ideal hours in the week
  return hours * 7;
}; // end getIdealSleepHours function

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
    return "This week you have overslept " + Math.abs(sleepHoursDifference).toString() + " hours."
  }
    // positive sleep debt
  else
    {
      return "This week you have accumulated " + sleepHoursDifference.toString() + " hours of sleep debt.";
    }
};


// test calculateSleepDebt
console.log('calculateSleepDebt Testing');
	// positive sleep debt
console.log(`expected output: 3.5 hours of sleep debt\nactual output: ${calculateSleepDebt(8.5)}`);
	// negative sleep debt
console.log(`expected output: overslept 28 hours\nactual output: ${calculateSleepDebt(4)}`);
	// no sleep debt
console.log(`expected output: no sleep debt\nactual output: ${calculateSleepDebt(8)}`);
console.log('--------------------------------------');
// end calculateSleepDebt testing
