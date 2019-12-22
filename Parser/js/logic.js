model.JSONSerialase = (value) => {
    let JSON =  '{';
    for(let key in value){
        if(typeof value[key] === 'object' && !Array.isArray(value[key])) {
            JSON = JSON.concat(`"${key}":${model.JSONSerialase(value[key])},`)
        } else {
            if(typeof value[key] === 'number' ){
                JSON = JSON.concat(`"${key}":${value[key]},`)
            } else if (typeof value[key] === 'boolean') {
                JSON = JSON.concat(`"${key}":[${value[key]}],`)
            } else if(Array.isArray(value[key])) {
                JSON = JSON.concat(`"${key}":[${value[key]}],`)
            } else {
                JSON = JSON.concat(`"${key}":"${value[key]}",`)
            }
        }
    }
    JSON = JSON.substring(0, JSON.length -1);
    JSON = JSON.concat('}');
    return JSON
};

model.JSONParse = (str) => {
    const JSON = {};
    let key = null;
    let value = null;
    let keyStartIndex = null;
    let keyEndIndex = null;
    let valueStartIndex = null;
    let valueEndIndex = null;
    let objStartIndex = null;
    let objEndIndex = null;
    let objStr = null;
    let obj;
    let isObj = false;
    let withoutOj = '';
    let endWithoutObj = '';
    for(let i = 0; i < str.length; i++) {
         if (str[i] === '{' && (i !== 0)){
            for(let j = str.length; j > 0; j--) {
                if (str[j] === '}' && j !== str.length - 1) {
                    objEndIndex = j;
                    break
                }
            }
            objStartIndex = i ;

            let startWithoutObj = str.slice(0, objStartIndex );
            endWithoutObj = str.slice(objEndIndex + 1, str.length );
            withoutOj = withoutOj.concat(startWithoutObj, endWithoutObj)
            objStr = str.slice(objStartIndex, objEndIndex + 1);

            obj = model.JSONParse(objStr);
            str = str.slice(0, objStartIndex).concat(endWithoutObj);
            isObj = true
        } else if (str[i] === '"' && str[i+1] !== ':' && str[i-1] !==':' && str[i+1] !== ','){
            keyStartIndex = i + 1;
        } else if (str[i] === '"' && str[i+1] === ':') {
            keyEndIndex = i;
        } else if (keyEndIndex !== null && keyStartIndex !== null) {
            key = str.slice(keyStartIndex, keyEndIndex);
            keyStartIndex = null;
            keyEndIndex = null;
        }

        if(isObj === true) {
            JSON[key] = obj;
            isObj = false;

        } else {
            if (str[i] === ':') {
                valueStartIndex = i + 1;
            } else if (((str[i] === ',' && str[i+1] === '"' ) || (str[i] === '}' && str[i+1] === undefined )) ) {
                valueEndIndex = i;
            } if (valueStartIndex !== null && valueEndIndex !== null){
                value = str.slice(valueStartIndex, valueEndIndex);
                valueStartIndex = null;
                valueEndIndex = null;
                if(value.includes('}')){
                    value = value.slice(0, value.length - 1)
                }
                JSON[key] = eval(value);
            }
        }
    }
    return JSON;
};

function deepEqual(a, b) {
    if (a === b) {
        return true;
    }

    if (a == null || typeof(a) != "object" ||
        b == null || typeof(b) != "object")
    {
        return false;
    }

    let propertiesInA = 0, propertiesInB = 0;
    for (let property in a) {
        propertiesInA += 1;
    }
    for (let property in b) {
        propertiesInB += 1;
        if (!(property in a) || !deepEqual(a[property], b[property])) {
            return false;
        }
    }
    return propertiesInA == propertiesInB;
}