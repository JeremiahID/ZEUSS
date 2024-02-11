// mouse over scripting

const Male = document.querySelector('#male');
const Female = document.querySelector('#female');
const Main = document.querySelector('main');
const Male_layer = document.querySelector('#Male_layer')
const Header = document.querySelector('h1');


Male.addEventListener('mouseover', () =>{
    if(Male_layer.style.display === "none"){
        Male_layer.style.display = "block";
        Main.style.gridTemplateColumns = '65% 35%';
        Header.style.display = "none";
    } else {
        Male_layer.style.display = "none";
        Main.style.gridTemplateColumns = '50% 50%';
        Header.style.display = "block";
    }
   


})