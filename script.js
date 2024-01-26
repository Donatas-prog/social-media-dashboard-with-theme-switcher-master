const button = document.getElementById('slider');
const container = document.querySelector('.container_main');
const overview = document.querySelectorAll('.overview_div');
const article = document.querySelectorAll('.div_article')

button.addEventListener('click', () => {
    container.classList.toggle('active');
    article.forEach((item) => 
    item.classList.toggle('active'));
    overview.forEach((item) => {
        item.classList.toggle('active');
    })
    
    
   
})
console.log(article);