
//! how to decleare string


// by literals 

let str1 = 'this is string1';
console.log(str1)  // this is string1
console.log(typeof str1);  // string
console.log("***********************")

let str2 = "this is string2"
console.log(str2)   // this is string2
console.log(typeof str2); // string
console.log("***********************")

let str3 = `this is string3`
console.log(str3)   //this is string3
console.log(typeof str3);  // string
console.log("***********************")

//! by using string object

let objstr = new String("this is object string");
console.log(objstr);

//! how to know the length of thw string

let str4 = 'hello how are you';
console.log(str4.length);  //17 
// length is the property of string
console.log("***********************")


//! string methods


//? 1. toUpperCase()

let str5 = 'hello';
let upperstr = str5.toUpperCase()
console.log(upperstr) // HELLO
console.log(str5)     // hello
console.log("***********************")


//? 2. toLowerCase()

let str6 = "HELO";
let lowerstr = str6.toLowerCase()
console.log(lowerstr)  // helo
console.log(str6)     // HELO
console.log("***********************")


//? 3. includes()

let str7 = 'hello how are you'
let isPresent = str7.includes('you')
console.log(isPresent)   // true
console.log("***********************")


//? 4. startsWith()

let str8 = 'hello good afternoon'
let isStarting = str8.startsWith('hello  ')
console.log(isStarting)  // false
console.log("***********************")


//? 5. endsWith()

let isEnding = str8.endsWith('noon')
console.log(isEnding)  // true
console.log("***********************")


//? 6. charAt()

let char = str8.charAt(1)
console.log(char);  // e
console.log("***********************")


//? 7. indexOf()

let index = str8.indexOf('n')  // it will give the index of the first 'n'
console.log(index);  //16       // if the character is not present it will give -1.
console.log("***********************")


//? 8. lastIndexOf()

let index1 = str8.lastIndexOf('t')
console.log(index1); // 13
console.log("***********************")


//? 9. concat()

let str9 = "hello";
let str10 = "how are you";
let mergestr = str9.concat(" ", str10, "?" ); 
console.log(mergestr);  // hello how are you?
console.log("***********************")


//? 10. replace()

let replacestr = str9.replace("l","*")
console.log(replacestr); // he*lo
console.log("***********************")


//? 11. replaceAll()

let replacestr1 = str9.replaceAll('l','*')
console.log(replacestr1);  // he**o
console.log("***********************")

let msg="i am from chennai, i love chennai"
let replacedmsg = msg.replaceAll('chennai','bengal')
console.log(replacedmsg);  // i am from, i love bengal
console.log("***********************")


//? 12. trim()

let str11 = '   hello   '
console.log(str11)    //  _ _ _hello_ _ _  
console.log(str11.length); // 11
console.log("***********************")

let trimmedstr = str11.trim()
console.log(trimmedstr);  // hello
console.log(trimmedstr.length) //5
console.log("***********************")


//? 13. trimStart()

let trimmedstr1 = str11.trimStart()
console.log(trimmedstr1); // hello_ _ _
console.log(trimmedstr1.length);  // 8
console.log("***********************")


//? 14. trimEnd()

let trimmedstr2 = str11.trimStart()
console.log(trimmedstr2);   // _ _ _hello
console.log(trimmedstr2.length);  // 8
console.log("***********************")


//? 15. subStr()

let str12 = 'hello how are you'  // substr(start index,length)           
console.log(str12.substr(2,6))   // llo ho
console.log(str12.substr(2))    // llo how are you
console.log(str12.substr(-5))  // e you
console.log(str12.substr(-5,3))  // e y
console.log(str12.substr(-5,-3))  // (blank) no output is get
console.log("***********************")


//? 16. slice()
    // slice(startindex, endindex)  used to sperate the one string into another
console.log(str12.slice(2,8));   // llo ho
console.log(str12.slice(2));     // llo how are you
console.log(str12.slice(-5));    // e you
console.log(str12.slice(-5,-1)); // e yo
console.log(str12.slice(6,1));  // (blank) not possible (endindex should be greater than startindex)
console.log("***********************")


//? 17. substring()
        // substring(startindex, endindex)  used to extract the string
console.log(str12.substring(2,8));  // llo ho
console.log(str12.substring(2));    // llo how are you
console.log(str12.substring(-5)); // neg values convert into 0:  hello how are you
console.log(str12.substring(6,1));  // ello
console.log("***********************")

//? 18. padStart()

let str13 = 'hi'
console.log(str13);  // hi

let padding = str13.padStart(6,"u")
console.log(padding);        //  uuuuhi
console.log(str13.padStart(6,"san"));  //  sanshi 
console.log("***********************")

//? 19. padEnd()

let padding2 = str13.padEnd(5,'hello')
console.log(padding2);     // hihel
console.log("***********************")

//? 20. search()

let str14 = 'hello, good afternoon'
console.log(str14.search("good")); // 7
console.log(str14.search("m"));  // -1 (because it is not present)
console.log("***********************")

//? 21. split()
// string into array
let str15 = 'good afternoon everyone'
let arr = str15.split(" ")
console.log(arr);   // [ 'good', 'afternoon', 'everyone' ]
console.log("***********************")

//! decleare string using string object

let strObj1 = new String('this is string object')
let strObj2 = new String('this is string object')

let normalstr1= 'this is normal string'
let normalstr2= 'this is normal string'

console.log(normalstr1 === normalstr2);  // true
console.log(strObj1 === strObj2);    // false
console.log("***********************")

//? 22. valueOf()

let normalstr3 = strObj1.valueOf()

console.log(strObj1);  // [String: 'this is string object']
console.log(normalstr3);  // this is string object
console.log("***********************")

// task

let strin="AABCASDS"
let res="";
for(let i=0;i<strin.length;i++)
{
    if(!res.includes(strin[i]))
    {
        res+=strin[i];
    }
}
console.log(res);
console.log("***********************")

