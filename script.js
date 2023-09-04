//your JS code here. If required.
let user1;
let user2;
let turn=1;
let grid1=document.getElementById("grid");
let griditems=document.getElementsByClassName("griditems"); 

let form1=document.getElementById("form1");
let message=document.getElementById("mes");
for(let i=0; i<griditems;i++){	
		griditems[i].addEventListener("click",()=>{
			// e.preventDefault();
			document.write("hello");
			if(turn===1){
				
				griditems[i].innerText="x";
				turn=2;
			}
			else{
				griditems[i].innerText="o";
				// user2=griditems[i];
				turn=1;
			}
		 })
	}
// let player2=document.getElementById("player-2");

form1.addEventListener("submit",(e)=>{
	e.preventDefault();
	user1=form1["player-1"].value;
	user2=form1["player-2"].value;
	
	message.innerText=user1;
	// document.write(user1);
grid1.style.display="grid";

 })