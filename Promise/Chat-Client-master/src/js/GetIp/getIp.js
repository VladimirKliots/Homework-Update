export const getIp = (cb) => { // 
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', '/getip', true); //https://api.ipify.org?format=json
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);
    
        cb && (cb(data.ip));
    };

    xhr.send();
};
