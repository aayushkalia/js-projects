const formselection = document.querySelector('form');
formselection.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value.trim());
    const weight = parseInt(document.getElementById('weight').value.trim());
    const bmi = weight*10000 /(height*height);
    const result = document.getElementById('results');
    result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
})