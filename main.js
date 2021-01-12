let v01 = [30,29,28,27,26,25,24,23,21,20,19,18,17,16,15,14,13,12,11,10];
let v02 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let v03 = new Array;


v01.sort(function(a,b) {
    return a-b
});
v02.sort(function(a,b) {
    return a-b
});


for(i = 0; i <= v01.length &&  i <= v02.length; i++){
    if(v01[i] < v02[i]) {
        v03.push(v01[i]);
        if (v01[i + 1] < v02[i]){
            v03.push(v01[i + 1]);
        }
    }

    console.log(v03);
}

//console.log(v01);
//console.log(v02);
//console.log(v03);


