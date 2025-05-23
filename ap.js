// marriage calculator
var enter_Status = prompt('Enter you status,are you married,reply(yes/no)');
if(enter_Status === 'no'){alert('ok see my next conditon')
{var widower = prompt('are you widower(the man whose wife has died)reply yes/not')
    if(widower === 'not'){alert('ok see my next condition')}
    else{alert('You are widower,i donot want to marry you,sorry')}
    {var age = prompt ('Enter your age')
        if(age >= 18 && age <= 30){alert('ok see my next condition')}
        else if(age < 18){alert('sorry,you are children')}
        else{alert('Sorry, you are old man')}
        {var job = prompt('are you job holder reply yes/not')
            if(job === 'yes'){alert('ok see my next condition')}
            else{alert('I donot want to marry jobless man')}
            {var car = prompt('Have you car,reply yes/not')
                if(car ==='yes'){alert('ok see my next condition')}
                else{'I donot want to marry man who has not car'}
                {var model = prompt('Enter your car model like 2000,2025 etc')
                    if(model >= 2020){alert('ok see my next condition')}
                    else{alert('you have old model car, i donot want to marry you')}
                    {var home = prompt('Do you have own home (yes/not)')
                        if(home === 'yes'){alert('ok see my next condition')}
                        else{alert('I donot want to live in rent home so i donot want to marry you,you are poor')}
                        {var combine_Family = prompt('Have you combine family system(yes/not)')
                            if(combine_Family === 'not'){alert('ok see my next condition')}
                            else{alert('I donot marry you because i donot like combine family system')}
                            { var second_Marriage = prompt('will you second marry after marriage me(yes/not)')
                                if(second_Marriage === 'not'){alert('ok see my next condition')}
                                else{alert('you are deceiver i donot want to marry you')}
                                {var honey_Moon = prompt('Where will we celebrate honey moon(abroad/pakistan)')
                                    if(honey_Moon === 'abroad'){alert('ok see my next condition')}
                                    else{alert('I want to celebrate honey moon abroad so i donot want to marry you')}
                                    alert('I will think about marry you,after thinking I will reply you, you have passed interview but I will see you in marit list')
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



else{alert('I donot want to marry you')}