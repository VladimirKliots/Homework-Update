export const changeOffline = (ip, date) => {
    const userArea = document.getElementById(`${ip}`); 
    const leftTimeArea = document.createElement('p');

    userArea.classList.remove('view__item', 'item', 'item--online');
    userArea.classList.add('view__item', 'item', 'item--offline');
    userArea.childNodes[1].remove();
        
    leftTimeArea.innerHTML = `${date}`;
        
    userArea.append(leftTimeArea);
     
};