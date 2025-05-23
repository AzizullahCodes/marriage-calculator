// Marriage calculator use only lowecase
var enter_Status = prompt('Enter your status. Are you married? (yes/not)');
if (enter_Status !== 'not') {
    alert('I do not want to marry you.');
} else {
    var widower = prompt('Are you a widower (man whose wife has died)? (yes/not)');
    if (widower !== 'not') {
        alert('You are a widower, I do not want to marry you. Sorry!');
    } else {
        var age = parseInt(prompt('Enter your age'));
        if (age < 18) {
            alert('Sorry, you are a child.');
        } else if (age > 30) {
            alert('Sorry, you are too old.');
        } else {
            var job = prompt('Are you a job holder? (yes/not)');
            if (job !== 'yes') {
                alert('I do not want to marry a jobless man.');
            } else {
                var car = prompt('Do you have a car? (yes/not)');
                if (car !== 'yes') {
                    alert('I do not want to marry a man who has no car.');
                } else {
                    var model = parseInt(prompt('Enter your car model (e.g. 2000, 2025)'));
                    if (model < 2020) {
                        alert('Your car is old model, I do not want to marry you.');
                    } else {
                        var home = prompt('Do you own a home? (yes/not)');
                        if (home !== 'yes') {
                            alert('I do not want to live in a rented home. You are poor.');
                        } else {
                            var combine_Family = prompt('Do you live in a combined family system? (yes/not)');
                            if (combine_Family !== 'not') {
                                alert('I do not want to marry you because I dislike combined family system.');
                            } else {
                                var second_Marriage = prompt('Will you do a second marriage after marrying me? (yes/not)');
                                if (second_Marriage !== 'not') {
                                    alert('You are a deceiver. I do not want to marry you.');
                                } else {
                                    var honey_Moon = prompt('Where will we celebrate honeymoon? (abroad/pakistan)');
                                    if (honey_Moon !== 'abroad') {
                                        alert('I want to celebrate honeymoon abroad. So, I do not want to marry you.');
                                    } else {
                                        alert('You passed the interview. I will think about marrying you and will tell you after checking the merit list!');
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
