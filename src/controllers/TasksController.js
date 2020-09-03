const analyzeTasks = {
    async analyzeTasks(inputText){
        try{

                if(!isNaN(inputText))
                {
                    return 'The InputString can only be a string';
                }
                var splittedInputText = inputText.split(/\r?\n/);
                var N = inputText[0];
                var usersObject = [];
                var countriesObject = []
                var countInput = 1;
                var splitting = true;
                while(splitting)
                {
                    if(splittedInputText[countInput].split(' ').length == 2)
                    {
                        var splitted = splittedInputText[countInput].split(' ');
                        usersObject.push({
                            UID : splitted[0],
                            CountryCode : splitted[1],
                            ExecutionTime: 0,
                            NumberOfTasks: 0
                        })
                        var foundCountry = false;
                        if(countriesObject == [])
                        {
                            countriesObject.push({
                                Name: splitted[1],
                                ExecutionTime: 0,
                                NumberOfTasks: 0
                            });
                        }else{
                            for (i = 0; i < countriesObject.length; i++) {
                                if(countriesObject[i].Name == splitted[0])
                                {
                                    foundCountry = true;
                                }
                            }
                            if(!foundCountry)
                            {
                                countriesObject.push({
                                    Name: splitted[1],
                                    ExecutionTime: 0,
                                    NumberOfTasks: 0
                                });
                            }
                        }
                        countInput++;
                    }else{
                        splitting = false;
                    }
                }
        
                countriesObject.sort(function(a, b) {
                    return a.Name.localeCompare(b.Name);
                });
        
                
                usersObject.sort(function(a, b) {
                    return a.UID.localeCompare(b.UID);
                });
        
                var T = splittedInputText[countInput];
                countInput++;
                splitting = true;
                
        
                while(splitting && splittedInputText[countInput] != null)
                {
                    if(splittedInputText[countInput].split(' ').length == 3)
                    {
                        var splitted = splittedInputText[countInput].split(' ');
                        for (i = 0; i < usersObject.length; i++) {
                            if(usersObject[i].UID == splitted[1])
                            {
                                usersObject[i].ExecutionTime += parseInt(splitted[2]);
                                usersObject[i].NumberOfTasks += 1;
                                for(iCountries = 0; iCountries < countriesObject.length; iCountries++)
                                {
                                    if(usersObject[i].CountryCode == countriesObject[iCountries].Name)
                                    {
                                        countriesObject[iCountries].ExecutionTime += parseInt(splitted[2]);
                                        countriesObject[iCountries].NumberOfTasks += 1;
                                    }                                
                                }
                            }
                        }                
                        countInput++;
                    }else{
                        splitting = false;
                    }
                }
                
                var returnString = '';
                for(i = 0;i < usersObject.length; i++){
                    if(usersObject[i].NumberOfTasks != 0)
                    {
                        returnString += usersObject[i].UID +' '+ (usersObject[i].ExecutionTime/usersObject[i].NumberOfTasks).toFixed(2) +'\n';
                    }else{
                        returnString += usersObject[i].UID +' 0\n';
                        
                    }
                }
        
                for(i = 0;i < countriesObject.length; i++){
                    if(countriesObject[i].NumberOfTasks != 0){
                        returnString += countriesObject[i].Name +' '+ (countriesObject[i].ExecutionTime/countriesObject[i].NumberOfTasks).toFixed(2);
                    }else{
                        returnString += countriesObject[i].Name +' 0';
                    }
                    if(countriesObject.length - i != 1){
                        returnString += '\n';
                    }
        
                }
            
                return returnString;
            }catch(e){
                return 'The InputString is in an invalid format';
            }
        }
    }
module.exports = analyzeTasks;