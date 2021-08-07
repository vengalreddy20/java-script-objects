var student={
    name:'vengal reddy',
    age:21,
    number:7993069718,
}
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student['name']);
console.log(student['age']);

var student={
    name:'vengal reddy',
    age:21,
    number:7993069718,
    address:{
        city:'nellore',
        state:'AP',
        pincode:524236
    }
}
console.log(student);
console.log(student.name);
console.log(student.address.state);
console.log(student['address']['city']);

student.gender='male';
console.log(student.gender);

//function with in the objects is called methods
var video={
    name:'access 101 js tutorial',
    play:function(){
        console.log('video played');
    }
}
console.log(video.name);
console.log(video.play());

var video={
    name:'access 101 js tutorial',
    play:function(){
        console.log('video played');
    },
    time:[0,50,120]
}
console.log(video.time);


var student={
    name:'vengal reddy',
    age:21,
    number:7993069718,
    address:{
        city:'nellore',
        state:'AP',
        pincode:524236
    }
}
console.log(student);
var student2=student;
console.log(student2);

student2.graduated='true';
console.log(student2);
console.log(student);



