// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Testimonial Carousel
var currentIndex = 0;
var testimonials = document.querySelectorAll('.testimonial');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = (i === index) ? 'block' : 'none';
    });
}

prevBtn.onclick = function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
    showTestimonial(currentIndex);
}

nextBtn.onclick = function() {
    currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
    showTestimonial(currentIndex);
}

showTestimonial(currentIndex);

// Gallery
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        var modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.style.width = '100%';

        var modalDiv = document.createElement('div');
        modalDiv.style.display = 'flex';
        modalDiv.style.justifyContent = 'center';
        modalDiv.style.alignItems = 'center';
        modalDiv.style.position = 'fixed';
        modalDiv.style.top = '0';
        modalDiv.style.left = '0';
        modalDiv.style.width = '100%';
        modalDiv.style.height = '100%';
        modalDiv
    })})