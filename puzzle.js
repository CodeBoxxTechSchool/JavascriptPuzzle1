const variablesReferenceTest = () => {
    const x = { attribute1: 1, attribute2: 2 };
    const y = { attribute1: 1, attribute2: 2 };
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
