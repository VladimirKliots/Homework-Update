import {changeOffline} from './changeOffline';
import {changeOnline} from './changeOnline';
import {displayUser} from './displayUser';
import {displayOffUser} from './displayOffuser';
export const changeUserState = (ip, name, state, time) => {
    
    let inTable = document.getElementById(ip);
    
    if (inTable) {    
        if (state === true) {
            changeOnline(ip, name); 
        } else {
            changeOffline(ip, time);
        }
    
    } else {
        if (state === true) {
            displayUser(ip, name);
        } else {
            displayOffUser(ip, name, time);
        }
        
    }
};   

