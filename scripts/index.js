// mouse over scripting

const Male = document.querySelector('#male');
const Female = document.querySelector('#female');
const Main = document.querySelector('main');
const Male_layer = document.querySelector('#Male_layer');
const Female_layer = document.querySelector('#Female_layer');
const HeaderMale = document.querySelector('#male h1');
const HeaderFemale = document.querySelector('#female h1');


Male.addEventListener('mouseover', () =>{
    if(Male_layer.style.display === "none"){
        Male_layer.style.display = "block";
        Main.style.gridTemplateColumns = '65% 35%';
        HeaderMale.style.display = "none";
        HeaderFemale.style.display = "none";
        
    } else {
        Male_layer.style.display = "none";
        Main.style.gridTemplateColumns = '50% 50%';
        HeaderMale.style.display = "block";
        HeaderFemale.style.display = "block";
    }

})

Female.addEventListener('mouseover', () =>{
    if(Male_layer.style.display === "block" || Female_layer.style.display === "none"){
        Male_layer.style.display = "none";
        Female_layer.style.display = "block"
        Main.style.gridTemplateColumns = '35% 65%';
        HeaderMale.style.display = "none";
        HeaderFemale.style.display = "none";
        
    } else {
        Male_layer.style.display = "block";
        Female_layer.style.display = "none"
        Main.style.gridTemplateColumns = '50% 50%';
        HeaderMale.style.display = "block";
        HeaderFemale.style.display = "block";
    }

})