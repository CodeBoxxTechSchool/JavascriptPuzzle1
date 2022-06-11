const variablesReferenceTest = () => {
    const x = { attribute1: 1, attribute2: 2 };
    // const y = x; <---- this line is wack, it makes 'y' a reference to 'x' with the same pointers and not a seperate object --Sevada
    const y = {...x}; //<-- Only change, now 'y' is a shallow copy of 'x' and not a reference --Sevada
    x.attribute1 = 3;

    //Modify the code above so we reach the "throw 'False'" statement
    if (x.attribute1 == y.attribute1) {
        throw 'True';
    } else {
        throw 'False';
    }
};

try {
    variablesReferenceTest();
} catch (error) {
    console.log(error)
}