var images = [
    "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3742711/pexels-photo-3742711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8956453/pexels-photo-8956453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4198029/pexels-photo-4198029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2433467/pexels-photo-2433467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]

var currentIndex = 0;
var img = document.querySelector('img');

var incrIndex = function(){
    currentIndex +=1;
    if(currentIndex > images.length -1){
        currentIndex = 0;
    }
    console.log(currentIndex);
    return currentIndex;
}

var decrIndex = function(){
    currentIndex -=1;
    if(currentIndex < 0){
        currentIndex = images.length-1;
    }
    return currentIndex
}

var prevbtn = document.getElementById('prev-btn');
var nextbtn = document.getElementById('next-btn');


prevbtn.onclick = function(){
    img.setAttribute('src',images[decrIndex(currentIndex)]);
}

nextbtn.onclick = function(){
    img.setAttribute('src',images[incrIndex(currentIndex)]);
}