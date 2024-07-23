const addNumbers = (...args)=>{
    let sum=0;
    args.forEach((arg)=>sum+=arg);
    return sum;
};

console.log(addNumbers(3,5,6,2,-1,5,-8,8));