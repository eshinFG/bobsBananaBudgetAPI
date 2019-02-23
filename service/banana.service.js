const moment = require('moment');
const bananaService = {};

bananaService.budget = ((startDate, numberOfDays)=>{
  const start = moment(startDate);
  if (startDate == null || start.isValid() === false) {
    return { success: false, message: 'Please enter valid date.' };
  }
  if (numberOfDays == null || (numberOfDays < 1 || numberOfDays > 3650)) {
    return { success: false, message: 'Must have more than 1 day and less than 3650.' };
  }

  const end = moment(startDate).add(numberOfDays, 'days');
  let budget = 0;
  for (let m = moment(start); m.isBefore(end); m.add(1, 'days')) {
    let dayOfWeek = m.weekday();
    let date = parseInt(m.format('DD'));
    if (dayOfWeek === 6 || dayOfWeek === 0) {
      continue;
    };

    if (date <= 7) {
      budget += .05;
    } else if (date > 7 && date <= 14) {
      budget += .10;
    } else if (date > 14 && date <= 21) {
      budget += .15;
    } else if (date > 21 && date <= 28) {
      budget += .20;
    } else {
      budget += .25;
    };
  }
  budget = budget.toFixed(2);
  
  return { success: true, data: budget, message: `Your budget for bananas is $${budget}!` }
})


module.exports = bananaService;