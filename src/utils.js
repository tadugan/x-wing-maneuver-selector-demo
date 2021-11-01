export const logHello = () => {
    console.log('Hello World');
};

export const logLocation = (e, locationString) => {
    e.preventDefault();
    console.log(`The target location is: ${locationString}`);
};
