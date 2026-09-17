const elements = document.querySelectorAll(
  '.intro-strip article, .feature-item, .steps article, .story-card, .design-section > div, .product-photo, .mini-box'
);

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.12});

elements.forEach(el=>{
  el.classList.add('reveal');
  observer.observe(el);
});
