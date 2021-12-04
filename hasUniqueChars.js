const stringIsUnique = (str = '') => {
    for(let i = 0; i < str.length; i++){
        const stringIsNotUnique = str[i];
        if(str.indexOf(stringIsNotUnique) !== str.lastIndexOf(stringIsNotUnique)){
            return false;
        };
        
    };
    return true;
};
console.log(stringIsUnique('code works'));