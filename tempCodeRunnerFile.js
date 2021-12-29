const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function() {
    arr2 = [...arr1]; //it will spread out the contents of arr1 into new array [...arr1]
                        //So we are not making arr2 = arr1. We are making arr2 equals to 
                        //all contents of arr1
    arr1[0] = 'potato';
})();
console.log(arr2)