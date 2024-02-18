// mouse over scripting

const Male = document.querySelector('#male');
const Female = document.querySelector('#female');
const Main = document.querySelector('main');
const Male_layer = document.querySelector('#male_wrapper');
const Female_layer = document.querySelector('#female_wrapper');
const HeaderMale = document.querySelector('#male h1');
const HeaderFemale = document.querySelector('#female h1');
const Body = document.querySelector('.body');
const BodyImage = document.querySelector('.body img');
const Skin = document.querySelector('.skin');
const Hair = document.querySelector('.hair');


Male.addEventListener('mouseover', () =>{
    if(Male_layer.style.display === "none" || Female_layer.style.display === "block" ){
        Male_layer.style.display = "flex";
        Female_layer.style.display = "none"
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
    if( Female_layer.style.display === "none" || Male_layer.style.display === "block" ){
        Female_layer.style.display = "flex"
        Male_layer.style.display = "none";
        Main.style.gridTemplateColumns = '35% 65%';
        HeaderMale.style.display = "none";
        HeaderFemale.style.display = "none";
        
    } else {
        Female_layer.style.display = "none"
        Main.style.gridTemplateColumns = '50% 50%';
        HeaderMale.style.display = "block";
        HeaderFemale.style.display = "block";
    }

})

// Body.addEventListener('mouseover', () =>{
//     if(BodyImage.style.display === "none"){
//         BodyImage.style.display = "block"
//     } else {
//         BodyImage.style.display = "none"
//     }

// })


//Male_layer.style.display === "block"  Male_layer.style.display = "none";
//         Male_layer.style.display = "block";