var arr1=["ab","cd"]; 
var arr2=["a","bcde"]; 
var str1=""; 
var str2=""; 
for(var i=0;i<arr1.length;i++){ 
 str1+=arr1[i]; 
} 
for(var i=0;i<arr2.length;i++){ 
 str2+=arr2[i]; 
} 
console.log(str1); 
console.log(str2); 
if(str1==str2){ 
 console.log("both strings are equal."); 
 } 
else{ 
 console.log("both strings are not equal."); 
}