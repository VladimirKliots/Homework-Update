export const putMessage = (data) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('PUT', '/putmessage', true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = xhr.response;

                resolve(JSON.parse(data));
            }else {
                const error = new Error(this.statusText);

                error.code = this.status;
                reject(error);
            }
        };
        xhr.send(JSON.stringify(data));
    });
};

export const putUser = (data) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('PUT', '/putuser', true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = xhr.response;

                resolve(JSON.parse(data));
            } else {
                const error = new Error(this.statusText);

                error.code = this.status;
                reject(error);
            }
        };

        xhr.send(JSON.stringify(data));
    });
};

export const putChangeUserState = (data) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('PUT', '/putchangeuserstate',  true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = xhr.response;

                resolve(JSON.parse(data));
            } else {
                const error = new Error(this.statusText);

                error.code = this.status;
                reject(error);
            }
        };

        xhr.send(JSON.stringify(data));
    });
};

export const putChangeUserName = (data) => {

    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();

        xhr.open('PUT', '/putchangeusername',  true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = xhr.response;

                resolve(JSON.parse(data));
            }else {
                const error = new Error(this.statusText);

                error.code = this.status;
                reject(error);
            }
        };

        xhr.send(JSON.stringify(data));
    });
};

export const getMessages = () => {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', '/getmessages', true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = xhr.response;

                resolve(JSON.parse(data));
            }else {
                const error = new Error(this.statusText);

                error.code = this.status;
                reject(error);
            }
        };
        xhr.send();
    });
};

export const getUsers = () => {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', '/getusers', true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = xhr.response;

                resolve(JSON.parse(data));
            }else {
                const error = new Error(this.statusText);

                error.code = this.status;
                reject(error);
            }
        };
        xhr.send();
    });
};
