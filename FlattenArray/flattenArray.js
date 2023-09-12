function flattenArray(arr){
    const val = []
    arr.forEach( e => {

        if (Array.isArray( e )) 
            val.push( ...flattenArray( e ) );
        else 
            val.push( e );

    });

    return val;
}

const test = [1, [2, 3], [4, 5, [6]]];

console.log(flattenArray(test));