"use strict";

const makeError = function () {
    try{
        const name = 'Ike';

        name ='danyel';
    }
    catch(err){

        console.error(err.name);

    }

}

makeError();
