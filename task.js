num =+prompt("enter a number : ")
for(i=-1;!(i<=num-1); i--){
    console.log(i)
}


num =+prompt("enter a number : ")
for(i=num;!(i>=0);i++){
    console.log(i)
}

number=prompt("enter a number : ")
sum=0
for(var i of number){
    let num=+i
    if(num%2==0){
        sum+=num
    }
}
console.log("sum of even digits:",sum)



number=prompt("enter a number : ")
sum=0
for(var i of number){
    let num=+i
    if(num%2!=0){
        sum+=num
    }
}
console.log("sum of odd digits:",sum)