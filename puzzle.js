const variablesReferenceTest = () => {
    const x = { attribute1: 1, attribute2: 2 };
    const y = x;
    x.attribute1 = 3;

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