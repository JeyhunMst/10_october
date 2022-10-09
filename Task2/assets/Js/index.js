//Find iteration
function findFunc(array,callback){
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) 
        {
            return array[i];
        }
        else{
            return -1;
        }
        
    }
    
}
//------------------------------------------------------------------------
//Filter iteration

function filterFnc(array,callback){
    const arr=[];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) 
        {
            arr.push(array[i]);    
        }
    }
    return arr;
}

//-------------------------------------------------------------------------
// Every iteration

function  everyFunc(array,callback) {
    let count=0;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            count++;
        }
    }
    return count===array.length;
}
//--------------------------------------------------------------------------
//Some iteration

function someFunc(array,callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }    
    }
    return false;
}