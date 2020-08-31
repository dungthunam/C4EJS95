// let number  =prompt("Enter a number");
// let summ = number*(number+1);
// alert(summ);
    
// let number  =prompt("Enter a number");
// for(let i=number;i>=0;i--){
//     if (i%2==0){
//         console.log("even "+i)

//     }
//     else{
//         console.log("odd "+i)
//     }

// }



while(true){
    let name =prompt("Enter your name");
    if (name == ""){
        alert("Return")
    }

    else{
        break;
    }
}
while(true){
    let password = prompt("Enter your password");
    let lenth=password.length;
        if(lenth>=6 && lenth<=20){
            alert("Success")
        }
        else{
            alert("Again")
        }
}


// template String so sanh vs ""  ''