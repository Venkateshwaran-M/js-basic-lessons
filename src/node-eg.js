console.log('Hi Node!!!');
function callme () {
    let x = 100;
    let y= x*2;
    if(x<500){
        console.log('x < 500');
        const z=x+y;
        console.log(`z:${z}`);
    }
    if(y < 500)
    console.log('y<500');
    // let v1=z+y;
        // console.log(`v1:${v1}`);
    }
}

console.log(callme());