const variablesReferenceTest = () => {
    const x = { value1: 1, value2: 2 };
    const y = x;
    x.value1 = 3;

    //Change the above code to get the SUCCESS message
    if (x.value1 != y.value1) {
        throw 'ERROR!';
    } else {
        throw 'SUCCESS';
    }
};

try {
    variablesReferenceTest();
} catch (error) {
    console.log(error)
}