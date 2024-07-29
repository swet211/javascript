

const user={
    username:"swet",
    price : 900 ,
    welcomemsg : function() {
    console.log(`${this.username},welcome the website`)
    }
}//{}= return is compulsory
//()=no return required
//object=({}) must in this format in arrow functiom
user.welcomemsg()
const twono = (num1,num2) => ({username:"swet"})
console.log(twono(3,69))