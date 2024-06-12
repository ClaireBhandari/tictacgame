
let squares = document.querySelectorAll(".square");
let box = document.querySelectorAll ("#box");

let p1 = []; let p2 = []; const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let available = [0,1,2,3,4,5,6,7,8];
let p2go = Math.floor((Math.random()* available.length));

for (let i=0; i<squares.length;i++){
    squares[i].addEventListener('mousedown', function() {

      
if ( available.length != 0 && available.includes(parseInt(this.id)) ) 
    {this.innerText = "O"; available = available.filter((elem) =>
elem != this.id); p1.push(parseInt(this.id));  }  else {alert("square taken")}

for (let j=0; j<8;j++) {
if (p1.includes (win[j][0]) && p1.includes(win[j][1]) && p1.includes(win[j][2]) )
{ alert("Player 1 wins!"); available = [0,1,2,3,4,5,6,7,8]; p1 = []; p2 = [];
    for (let i=0; i<squares.length;i++){ squares[i].innerText =" "}
 } else { if (available == 0) {alert("draw"); available = [0,1,2,3,4,5,6,7,8]; p1 = []; p2 = [];
    for (let i=0; i<squares.length;i++){ squares[i].innerText =" "}}}
}
})


    squares[i].addEventListener("mouseup", function() {
      
        p2go = available [Math.floor((Math.random()* available.length))];
        squares[p2go].innerText = "X"; 
        available = available.filter((elem) =>elem != p2go);
      p2.push (p2go)
      for (let j=0; j<8;j++) {
        
        if (p2.includes (win[j][0]) && p2.includes(win[j][1]) && p2.includes(win[j][2]) )
        { alert("Player 2 wins!");  available = [0,1,2,3,4,5,6,7,8]; p1 = []; p2 = [];
            for (let i=0; i<squares.length;i++){ squares[i].innerText =" "} } else {}}
    

    })

}
