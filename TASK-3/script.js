const caltemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celtofah = (cel) => {
        let fahrenheit = ((cel *9/5) + 32);
        return fahrenheit;
    }

    const fahtocel = (fehr) => {
        let celsius =((fehr - 32) * 5/9);
        return celsius;
    }
    
    let result;

    if(valueTemp == 'cel'){
        result = celtofah(numberTemp);
        document.getElementById('resultContainer').innerHTML = ` ${result} °Fahrenheit`;
    }else{
        result = fahtocel(numberTemp);
        document.getElementById('resultContainer').innerHTML = ` ${result} °Celsius`;
    }
}
