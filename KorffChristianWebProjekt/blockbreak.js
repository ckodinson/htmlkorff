const canvas = document.getElementById('spielFeld');
const ctx = canvas.getContext("2d");




const levels = [


            [

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],


    ],

[
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0],
    [0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0],
    [0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0],
    [0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

],
[
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 2, 0, 0, 0, 2, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 2, 0, 0, 0, 2, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 2, 0, 2, 2, 2, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 2, 0, 2, 2, 2, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 2, 0, 0, 0, 2, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 2, 0, 0, 0, 2, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 2, 2, 2, 0, 2, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 2, 2, 2, 0, 2, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 2, 0, 0, 0, 2, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 2, 0, 0, 0, 2, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    
    
],
[
    
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 0, 0],
    [0, 0, 1, 1, 4, 4, 1, 1, 3, 3, 1, 1, 0, 0],
    [0, 0, 1, 1, 4, 4, 1, 1, 3, 3, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 0, 0],
    
   
    
],
[
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 2],
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2],
    [2, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 2],
    [2, 3, 2, 3, 2, 0, 0, 0, 0, 2, 3, 2, 3, 2],
    [2, 0, 2, 0, 2, 0, 2, 2, 0, 2, 0, 2, 0, 2],
    [2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2],
    [2, 0, 2, 0, 2, 4, 4, 4, 4, 2, 0, 2, 0, 2],
    [2, 3, 2, 3, 2, 4, 4, 4, 4, 2, 3, 2, 3, 2],
    [2, 0, 2, 0, 2, 4, 4, 4, 4, 2, 0, 2, 0, 2],
    [2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3],
    
    
],




[
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],

],
[
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],

],




[
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
[1, 1, 1, 0, 3, 3, 3, 3, 3, 3, 0, 1, 1, 1],
[1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1],

],
[
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],

],
[
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],

],
[
[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
[0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 0],
[0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0],
[0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
[0, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1],
[0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1],
[0, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

],
];


const itemArrays = [

[

[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
[0, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0],
[5, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 0, 11, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],


],
[
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0],
[0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0],
[0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0],
[0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

],

[
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],
[2, 1, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 1],
[1, 2, 0, 0, 2, 1, 0, 0, 2, 1, 0, 0, 1, 2],

],

[

[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 1, 1, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],


],




[
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
[1, 1, 1, 0, 3, 3, 3, 3, 3, 3, 0, 1, 1, 1],
[1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1],

],
[
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],

],


[
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
[1, 1, 1, 0, 3, 3, 3, 3, 3, 3, 0, 1, 1, 1],
[1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1],

],
[
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],

],


[
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
[1, 1, 1, 0, 3, 3, 3, 3, 3, 3, 0, 1, 1, 1],
[1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1],

],
[
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],

],
[
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],

],
[
[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
[0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 0],
[0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0],
[0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
[0, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1],
[0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1],
[0, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

],
[
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    
    
],
];




let currentLevel = 0;
let spacePressed = false;
let schussAktiv = false;
let klebenAktiv = true;
let schuesse = [];
const maxSchuesse = 4;
const itemArray = []
const blockBreite = 49.45;
const blockHoehe = 15;
const blockAbstand = 0.35;
const blockZeilen = 20;
const blockSpalten = 14;
const bloecke = [];
const Itemlist = [];
const itemColors = [
null, // Kein Item (Platzhalter)
"#FFFF00",  //Gelb
"#00ff00",  // green
"#800080",   // lila
"#FF0000",  // Rot
"#0000FF",   // Blau
"#000080",   // Darkblue
"#800000",   // Maroon
"#FFA500",   //orange
"#008000",     //darkgrün
"#FF00FF",     //Magenta
"#00FFFF",     //cyan
];

const itemNames = [
null, // Kein Item (Platzhalter)
"Schutzlinie", // 1
"Extra Leben", //2
"Extra Punkte",	// 3
"Schläger langsamer", // 4
"Schläger schneller", // 5
"Ball schneller", // 6
"Ball langsamer", //7
"Schuss Aktiv", //8
"Kleber Aktiv", //9
"Schlägersize -", //10                                          // Fügen Sie hier weitere Item-Namen hinzu
"Schlägersize +", //11
];
const steinFarben = []
const levelFarben = [
[
"#243B0B",
"#0B4C5F",
"#0B3960",
"#0B2060",
"#0B0A60",
"#210A60"
],
                                    // Fügen Sie weitere Farbarrays für weitere Level hinzu
                                    [
"#B50531",
"#6A0888",
"#0B3960",
"#0B2060",
"#0B0A60",
"#210A60"
],
[
"#B45F04",
"#B09700",
"#0B3960",
"#0B2060",
"#0B0A60",
"#210A60"
],
[
"#9C3401",
"#741900",
"#441000",
"#0B2060",
"#0B0A60",
"#210A60"
],
[
"#848484",
"#595859",
"#2F2F2E",  //Lvl 5
"#2A130B",
"#0B0A60",
"#210A60"
],
[
"#0B605F",
"#0B4C5F",
"#0B3960",
"#0B2060",
"#0B0A60",
"#210A60"
],     
[
"#0B605F",
"#0B4C5F",
"#0B3960",
"#0B2060",
"#0B0A60",
"#210A60"
],   
[
"#0B605F",
"#0B4C5F",
"#0B3960",
"#0B2060",
"#0B0A60",
"#210A60"
],      
[
"#0B605F",
"#0B4C5F",
"#0B3960",
"#0B2060",
"#0B0A60",
"#210A60"
],      
[
"#0B605F",
"#0B4C5F",
"#0B3960",
"#0B2060",
"#0B0A60",
"#210A60"
],                                  
];

for(let i=0; i<blockZeilen; i++) {
  bloecke[i] = [];
  for(let j=0; j<blockSpalten; j++) {
    bloecke[i][j] = { x: 0, y: 0, status: Math.floor(Math.random() * 3) + 2 };
  }
}

function zeichneBloecke() {
const steinFarben = levelFarben[currentLevel];

for (let i = 0; i < blockZeilen; i++) {
for (let j = 0; j < blockSpalten; j++) {
    if (bloecke[i][j].status > 0) {
        const x = (j * (blockBreite + blockAbstand)) + blockAbstand;
        const y = (i * (blockHoehe + blockAbstand)) + blockAbstand;

        bloecke[i][j].x = x;
        bloecke[i][j].y = y;
        ctx.beginPath();
        ctx.rect(x, y, blockBreite, blockHoehe);

        // Verwende die Farbe aus dem steinFarben Array basierend auf dem Statuswert
        ctx.fillStyle = steinFarben[bloecke[i][j].status - 1];

        ctx.fill();
        ctx.closePath();
    }
}
}
}

 zeichneBloecke();
const itemmArrays = itemArray [currentLevel]; 
const levelArray = levels [currentLevel];
checkArrays(levelArray);
let changelevel = false;
let spielBeendet = false;
let schussX = 0;
let schussY = 0;
let schussGeschwindigkeit = 7;
const levelItemArrays = []
let Speedfaktor = 0.5;
const itemText = document.getElementById('itemText');
let schlaegergeschwindigkeit = 7;
let score = 0;
let leben = 3;
let ballX = canvas.width / 2;
let ballY = canvas.height - 50;
let dx = 0;
let dy = 0;
const ballRadius = 3;
let ballGeschwindigkeit = 6;
let schlaegerBreite = 75;
let schlaegerHoehe = 6;
let schlaegerX = (canvas.width - schlaegerBreite) / 2;
let ballRelativeX = ballX - schlaegerX;
let fallendeItems = [];
let rechtsGedrueckt = false;
let linksGedrueckt = false;
let schutzlinieAktiv = true;
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('blur', resetKeyStatus, false);
document.addEventListener("keypress", (e) => {
if (e.code === "Space" && schuesse.length < maxSchuesse && spielLaeuft === true && schussAktiv === true) {
schuesse.push({
    x: schlaegerX + schlaegerBreite / 2 - 1.5,
    y: canvas.height - schlaegerHoehe - 15
});
}
});



function resetKeyStatus() {
rechtsGedrueckt = false;
linksGedrueckt = false;
}



function keyDownHandler(e) {
if (e.key === 'Right' || e.key === 'ArrowRight') {
rechtsGedrueckt = true;
} else if (e.key === 'Left' || e.key === 'ArrowLeft') {
linksGedrueckt = true;
} else if (e.code === 'Space') {
spacePressed = true;

}
}

function keyUpHandler(e) {
if (e.key === 'Right' || e.key === 'ArrowRight') {
rechtsGedrueckt = false;
} else if (e.key === 'Left' || e.key === 'ArrowLeft') {
linksGedrueckt = false;
} else if (e.code === 'Space') {
spacePressed = false;

}
}


for (let r = 0; r < blockZeilen; r++) {
bloecke[r] = [];
for (let c = 0; c < blockSpalten; c++) {
bloecke[r][c] = { x: 0, y: 0, status: 1 };
}
}


function zeichneBall() {
ctx.beginPath();
ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
ctx.fillStyle = '#600A0B';
ctx.fill();
ctx.closePath();
}

function zeichneSchlaeger() {
ctx.beginPath();
var radius = 2; 
var x = schlaegerX;
var y = canvas.height - 10 - schlaegerHoehe;
var width = schlaegerBreite;
var height = schlaegerHoehe;

ctx.moveTo(x + radius, y);
ctx.lineTo(x + width - radius, y);
ctx.arc(x + width - radius, y + radius, radius, -Math.PI / 2, 0);
ctx.lineTo(x + width, y + height - radius);
ctx.arc(x + width - radius, y + height - radius, radius, 0, Math.PI / 2);
ctx.lineTo(x + radius, y + height);
ctx.arc(x + radius, y + height - radius, radius, Math.PI / 2, Math.PI);
ctx.lineTo(x, y + radius);
ctx.arc(x + radius, y + radius, radius, Math.PI, -Math.PI / 2);
if (klebenAktiv === true) {
ctx.fillStyle = "#008000";
} else if (schussAktiv === true) {
ctx.fillStyle = "#cd3700";
} else {
ctx.fillStyle = '#0f0f0f';
}
ctx.fill();
ctx.closePath();
}

let itemsl = 1
let spielLaeuft = false;

function GamePause() {
spielLauft = !spielLaeuft;
if (spielLauft && klebenAktiv === false && schussAktiv === false) {
showOverlayMessage('Leertaste zum Starten','','');
}
else if(spielLauft && klebenAktiv === false && schussAktiv === true){
spielLaeuft = spielLaeuft = true;
dy = -4;
}
else {}
}


document.addEventListener('keydown', (event) => {
if (event.key === ' ' && !spielLaeuft && klebenAktiv === false) {
spielLaeuft = true;
dx = 2.3;
dy = -4.5;

}
});

function checkArrays() {
for (let i = 0; i < levelArray.length; i++) {
if (levelArray[i] == 0 && itemArray[i] >= 1) {
   // alert("Ein Item wurde freigeschaltet!");
    itemArray[i] = 0;
}
}
}

function itemEffekt(itemType) {
const itemName = itemNames[itemType];
showItemText(itemName);
applyGameEffect(itemType); // Füge die gewünschten Effekte hinzu
}

function drawFallendeItems() {
for (let i = 0; i < fallendeItems.length; i++) {
const item = fallendeItems[i];
ctx.beginPath();
ctx.rect(item.x - 8, item.y - 8, 8, 8);
ctx.fillStyle = itemColors[item.itemType];
ctx.fill();
ctx.closePath();
}
}




function checkPaddleCollision(item, paddleX, paddleY, paddleWidth, paddleHeight) {
return (
item.x < paddleX + paddleWidth &&
item.x + 10 > paddleX &&
item.y < paddleY + paddleHeight &&
item.y + 10 > paddleY
);
}



function updateFallendeItems() {
for (let i = 0; i < fallendeItems.length; i++) {
const item = fallendeItems[i];
item.y += item.dy;

// Kollision mit Schläger
if (checkPaddleCollision(item, schlaegerX, canvas.height - 5 - schlaegerHoehe, schlaegerBreite, schlaegerHoehe)) {
    itemEffekt(item.itemType); // Aufrufen der itemEffekt Funktion, um den spezifischen Effekt des aufgenommenen Items anzuzeigen
    fallendeItems.splice(i, 1); // Entfernen Sie das gesammelte Item
    i--; // Passen Sie den Index an, da ein Element entfernt wurde
} else if (item.y > canvas.height) { // Wenn das Item den Boden berührt
    fallendeItems.splice(i, 1); // Entfernen Sie das Item
    i--; // Passen Sie den Index an, da ein Element entfernt wurde
}
}
}


function initBlocks() {
for (let r = 0; r < blockZeilen; r++) {
bloecke[r] = [];
itemArray[r] = [];
for (let c = 0; c < blockSpalten; c++) {
    const blockStatus = levels[currentLevel][r][c];
    bloecke[r][c] = { x: 0, y: 0, status: blockStatus };
    // Verwenden Sie das entsprechende Level-Item-Array, um Items zu platzieren
    itemArray[r][c] = itemArrays[currentLevel][r][c];
}
}
}



function nextLevel() {
changelevel = true;
currentLevel++;
fallendeItems = [];
ballX = canvas.width / 2;
ballY = canvas.height - 50;
schlaegerX = (canvas.width - schlaegerBreite) / 2;
if (currentLevel >= levels.length) {
alert("Du hast das Spiel gewonnen!");
document.location.reload();
} else {
// Setze die Ball- und Schlägerposition zurück
ballX = canvas.width / 2;
ballY = canvas.height - 50;
schlaegerX = (canvas.width - schlaegerBreite) / 2;

// Lade das nächste Level und setze das Spiel auf Pause
initBlocks();
spielLaeuft = false;
ballX = canvas.width / 2;
ballY = canvas.height - 50;
schlaegerX = (canvas.width - schlaegerBreite) / 2;
dx = 0;
dy = 0;
}
}






function resetBall() {
leben--;
fallendeItems = [];
Speedfaktor = 0.5;
schussAktiv = false;
klebenAktiv = false;
schlaegergeschwindigkeit = 7;
ballGeschwindigkeit = 6;
schlaegerBreite = 75;
if (leben === 0) {
const gameOverMessage = 'Game Over';
const scoreMessage = 'Dein Score: ' + score;
const restartMessage = 'Leertaste zum Neustarten';
showOverlayMessage(gameOverMessage, scoreMessage, restartMessage);
spielBeendet = true;
}

else {
schlaegerX = (canvas.width - schlaegerBreite) / 2;
ballX = schlaegerX - ballRadius;
ballY = canvas.height - 50;
dx = 0;
dy = 0;
spielLaeuft = false;
}
}

document.addEventListener("keyup", function(event) {
if (spielBeendet && event.code === "Space") {
document.location.reload();
}
});

function zeichneScoreLeben() {
const scoreAnzeige = document.getElementById('scoreAnzeige');
const lebenAnzeige = document.getElementById('lebenAnzeige');
const levelAnzeige = document.getElementById('levelAnzeige');
scoreAnzeige.textContent = 'Score: ' + score;
lebenAnzeige.textContent = 'Leben: ' + leben;
levelAnzeige.textContent = 'Level: ' + (currentLevel + 1);	
}

function levelplus() {
if (spielLaeuft === false && currentLevel < 7) {
currentLevel = currentLevel + 1;
initBlocks();
spielLaeuft = false;
}
}

function levelzurück() {
if (spielLaeuft === false && currentLevel > 0) {
currentLevel = currentLevel - 1;
initBlocks();
spielLaeuft = false;
}
}

function zeichneSchuss() {
for (let schuss of schuesse) {
ctx.beginPath();
ctx.rect(schuss.x, schuss.y, 3, 10);
ctx.fillStyle = "#FFc357";
ctx.fill();
ctx.closePath();
}
}


function showOverlayMessage(message, scoreMessage, restartMessage) {
ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.font = '24px Arial';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.fillText(message, canvas.width / 2, canvas.height / 2 - 40);
ctx.fillText(scoreMessage, canvas.width / 2, canvas.height / 2);
ctx.fillText(restartMessage, canvas.width / 2, canvas.height / 2 + 40);
}

function showItemText(itemName) {
itemText.textContent = itemName;
itemText.style.display = "inline-block";

// Timeout zum Ausblenden des Textes
setTimeout(() => {
itemText.style.display = "none";
}, 2000); // Zeit in Millisekunden, nach der der Text ausgeblendet wird (3000 ms = 3 Sekunden)
}


function onItemCollected(itemName) {


showItemText(itemName);
}


function applyGameEffect(itemType) {
switch (itemType) {
case 1:
schutzlinieAktiv = true;    //Schutzlinie
break;
case 2:
leben++
break;
case 3:
score = score + 10
break;
case 4:
if (schlaegergeschwindigkeit <= 3) {
} else {
schlaegergeschwindigkeit -=2;
}
break;
case 5:
  if (schlaegergeschwindigkeit >= 20) {
} else {
schlaegergeschwindigkeit = schlaegergeschwindigkeit + 2;
}
break;
case 6:
      if (ballGeschwindigkeit >= 12 && Speedfaktor>= 1) {
} else {
ballGeschwindigkeit = ballGeschwindigkeit + 1.5;
Speedfaktor = Speedfaktor + 0.1;
}
break;
case 7:
      if (ballGeschwindigkeit <= 3 && Speedfaktor<=0.2) {
} else {
ballGeschwindigkeit = ballGeschwindigkeit - 1;
Speedfaktor = Speedfaktor - 0.1;
}
break;
case 8:
schussAktiv = true;
klebenAktiv = false;

break;
case 9:
schussAktiv = false;
klebenAktiv = true;
break;
case 10:
if (schlaegerBreite <= 35) {
} else {
schlaegerBreite = schlaegerBreite - 10;
}
break;
case 11:
if (schlaegerBreite >= 115) {
} else {
schlaegerBreite = schlaegerBreite + 10;
}
break;
default:
break;
}
}

function zeichneSchutzlinie() {
if (schutzlinieAktiv) {
ctx.beginPath();
ctx.rect(0, canvas.height - 5, canvas.width, 2);
ctx.fillStyle = '#FFFF00';
ctx.fill();
ctx.closePath();
}
}



function kollisionErkennung() {
let allBlocksDestroyed = true;
let collisionProcessed = false; 
for (let r = 0; r < blockZeilen; r++) {
for (let c = 0; c < blockSpalten; c++) {
    const b = bloecke[r][c];
    if (b.status > 0) {
        const blockX = b.x;
        const blockY = b.y;
        if (
            ballX + ballRadius > blockX &&
            ballX - ballRadius < blockX + blockBreite &&
            ballY + ballRadius > blockY &&
            ballY - ballRadius < blockY + blockHoehe &&
            !collisionProcessed // Überprüfen, ob bereits eine Kollision verarbeitet wurde
        ) {
            const prevBallX = ballX - dx;
            const prevBallY = ballY - dy;

            const wasAbove = prevBallY + ballRadius <= blockY;
            const wasBelow = prevBallY - ballRadius >= blockY + blockHoehe;
            const wasLeft = prevBallX + ballRadius <= blockX;
            const wasRight = prevBallX - ballRadius >= blockX + blockBreite;

            if (wasAbove || wasBelow) {
                dy = -dy;
            } else if (wasLeft || wasRight) {
                dx = -dx;
            } else {
                // Wenn die Kollision in der Ecke stattfindet, ändern Sie beide Richtungen
                dy = -dy;
                dx = -dx;
            }

            b.status = b.status - 1;
            score++;

            if (b.status === 0 && itemArray[r][c] > 0) {
                fallendeItems.push({ x: blockX + blockBreite / 2, y: blockY, itemType: itemArray[r][c], dy: 2 });
            }

            collisionProcessed = true; // Setzen Sie die Variable auf true, nachdem eine Kollision verarbeitet wurde
        }

        allBlocksDestroyed = false;
    }
}
}

if (allBlocksDestroyed) {
nextLevel();
}
}

function adjustBounceAngle(velocity, minAngle) {
if (Math.abs(velocity) < minAngle) {
if (velocity >= 0) {
    return velocity + minAngle;
} else {
    return velocity - minAngle;
}
}
return velocity;
}

function zeichne() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
zeichneBall();
zeichneSchlaeger();
zeichneBloecke();
zeichneScoreLeben();
zeichneSchutzlinie();
updateFallendeItems();
drawFallendeItems();
GamePause();
zeichneSchuss();
updateSchuss();

if (ballX + dx > canvas.width - ballRadius || ballX + dx < ballRadius) {
dx = -dx;
}

if (ballY + dy < ballRadius) {
dy = -dy;
} else if (ballY + dy > canvas.height - ballRadius - schlaegerHoehe - 5) {
if (ballX + ballRadius >= schlaegerX && ballX - ballRadius <= schlaegerX + schlaegerBreite) {
    const schlaegerMitte = schlaegerX + schlaegerBreite / 2;
    const aufprallPosition = (ballX - schlaegerMitte) / (schlaegerBreite / 2);
    const maxWinkel = 75;
    const winkelRad = (maxWinkel * aufprallPosition) * (Math.PI / 180);
    const geschwindigkeitsFaktor = Math.abs(aufprallPosition) * Speedfaktor + 1;
    dx = Math.sin(winkelRad) * 5 * geschwindigkeitsFaktor;
    dy = -Math.cos(winkelRad) * 5 * geschwindigkeitsFaktor;
    dx = adjustBounceAngle(dx, 1); // Verwenden Sie einen minimalen Winkel von 1

    if (klebenAktiv) {
        dy = 0;
        ballRelativeX = ballX - schlaegerX; // Speichere die relative X-Position des Balls auf dem Schläger
        spielLaeuft = false;
    }

} else if (schutzlinieAktiv && ballY + dy > canvas.height - 3 - ballRadius) {
    dy = -dy;
    schutzlinieAktiv = false;
} else if (ballY + dy > canvas.height - ballRadius ) {
    resetBall();
}
}

if (rechtsGedrueckt && schlaegerX < canvas.width - schlaegerBreite) {
schlaegerX += schlaegergeschwindigkeit;
} else if (linksGedrueckt && schlaegerX > 0) {
schlaegerX -= schlaegergeschwindigkeit;
}

if (spielLaeuft || klebenAktiv) {
ballX += dx;
ballY += dy;
} else {
ballX = schlaegerX + ballRelativeX; // Setze den Ball auf die gespeicherte relative X-Position auf dem Schläger
ballY = canvas.height - ballRadius - schlaegerHoehe - 75  / 2;
if (!klebenAktiv) {
dx = 0; // Setze die horizontale Geschwindigkeit auf 0, wenn der Ball nicht am Schläger kleben sollte
}
}
if (klebenAktiv && !spielLaeuft) {
ballX = schlaegerX + ballRelativeX; // Aktualisiere die X-Position des Balls, während er am Schläger klebt
ballY = canvas.height - ballRadius - schlaegerHoehe - 10;
}
if (spacePressed && !spielLaeuft && klebenAktiv) {
const schlaegerMitte = schlaegerX + schlaegerBreite / 2;
const aufprallPosition = (ballX - schlaegerMitte) / (schlaegerBreite / 2);
const maxWinkel = 75;
const winkelRad = (maxWinkel * aufprallPosition) * (Math.PI / 180);
const geschwindigkeitsFaktor = Math.abs(aufprallPosition) * Speedfaktor + 1;

dx = Math.sin(winkelRad) * 5 * geschwindigkeitsFaktor;
dy = -Math.cos(winkelRad) * 5 * geschwindigkeitsFaktor;

spielLaeuft = true;

}
if (klebenAktiv && ballY >= canvas.height - schlaegerHoehe - ballRadius -3 &&schutzlinieAktiv) {
dy = -dy;
    schutzlinieAktiv = false;
}

else if (ballY + dy > canvas.height - ballRadius && klebenAktiv) {
    resetBall();
}



checkArrays();
kollisionErkennung();
if (!spielBeendet) {
requestAnimationFrame(zeichne);
}

}

initBlocks();
zeichne();


function updateSchuss() {
for (let i = 0; i < schuesse.length; i++) {
let schuss = schuesse[i];
schuss.y -= schussGeschwindigkeit;

// Überprüfen Sie, ob der Schuss die obere Kante des Canvas erreicht hat
if (schuss.y <= 0) {
    schuesse.splice(i, 1);
    i--;
    continue;
}
if (changelevel === true) {
    schuesse.splice(i, 1);
    i--;
    changelevel = false;
    continue;

}
// Überprüfen Sie die Kollision mit den Blöcken
for (let r = 0; r < blockZeilen; r++) {
    for (let c = 0; c < blockSpalten; c++) {
        const b = bloecke[r][c];
        if (b.status > 0) {
            if (schuss.x > b.x && schuss.x < b.x + blockBreite && schuss.y > b.y && schuss.y < b.y + blockHoehe) {
                b.status = b.status - 1;
                score++;
                if (b.status === 0 && itemArray[r][c] > 0) {
            fallendeItems.push({ x: b.x + blockBreite / 2, y: b.y, itemType: itemArray[r][c], dy: 2 });
        }
                schuesse.splice(i, 1);
                i--;
                break;
            }
        }
    }
}
}
}
