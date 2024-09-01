// const arrCategories = new Array(
//     {name: "Cat A", description: "Cars below 1600cc"},
//     {name: "Cat B", description: "Cars above 1600cc"},
//     {name: "Cat C", description: "Goods Vehicles and Buses"}
// );

// console.log(arrCategories.length);
// console.log(arrCategories[0].name, arrCategories[0].description);

// arrCategories.push({name: "Cat E", description: "Open"});
// console.log(arrCategories);

// arrCategories,pop();
// console.log(arrCategories);
// console.log(arrCategories.length);

// console.log(arrCategories.length);
// arrCategories.unshift({name:"Cat E", description: "Open"});
// console.log(arrCategories.length);
// console.log(arrCategories);

// arrCategories.shift();
// console.log(arrCategories);                      // removing the first element
// const vowels = "aeiou";                          // create an array of vowel letters
// console.log(vowels.length)                        // string is also an bj, that has the same chara as an array
// const slicedOne = vowels.slice(1);               // returns the number of elements based on the number to remove
// const slicedStartEnd = vowels.slice(1, 3);       // returns the number elements starting from start index and end index -1
// const slicedReversed = vowels.slice(-2);         // returns the number elements starting from the back of the array
// console.log(slicedOne);                          // what is returened from slicedOne
// console.log(slicedStartEnd);                      // what is returned from slicedStartEnd
// console.log(slicedReversed);                      // what is returned from slicedReversed

const names = ["ali", "samson", "jenny"];       // we have an array of names
// let capitalisedName = names[0]                // we want to capitalise the name of 'ali'
// console.log(capitalisedName);

// capitalisedName = capitalisedName.charAt(0).toUpperCase() + capitalisedName.slice(1)    //How to capitalise a name
// console.log(capitalisedName);

// CHALLENGE: Print out the names, where the each name should be in uppercase()
// Use either a for-loop OR a for-Each loop


    names.forEach(name => {
        console.log(name.charAt(0).toUpperCase() + name.slice(1));
    });

    for (let index = 0; index < names.length; index++) {
        console.log(names[index].charAt(0).toUpperCase() + name[index].slice(1));
    }


    
    const capitalisedName = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
    console.log(capitalisedName);



    