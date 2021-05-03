function showStarts(number,status) {
    if(status){

    for(let i=1;i<=number;i++) {

        let str = ' '.repeat(number-i);
        let str2 = '*'.repeat(i*2-1);
    console.log(str + str2 + str);
    }
    }
    else{
      for( let i=1 ;i<=number;i++) {
        let str2 = '*'.repeat(i);
     console.log(str2);
    }
  }
}

showStarts(10, true);
