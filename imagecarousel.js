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
var next = document.getElementById('next-button');
var prev = document.getElementById('prev-button');

var incrementIndex = function(){
    console.log(currentIndex);
    currentIndex +=1;
    if(currentIndex > images.length-1){
        currentIndex = 0;
    }
    return currentIndex;
}

var decrementIndex = function(){
    console.log(currentIndex);
    currentIndex = currentIndex - 1;
    if(currentIndex < 0){
        currentIndex = images.length-1;
    }
    return currentIndex;
}

next.onclick = function(){
    img.setAttribute('src',images[incrementIndex(currentIndex)]);
}

prev.onclick = function(){
    img.setAttribute('src',images[decrementIndex(currentIndex)]);
}