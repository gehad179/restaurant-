window.onload = function() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'block';
  
    // إخفاء المسدج بعد فترة زمنية قصيرة باستخدام animate.css
    setTimeout(function() {
      popup.classList.remove('animate__fadeIn');
      popup.classList.add('animate__fadeOut'); // استخدم animate__fadeOut للاختفاء
      setTimeout(function() {
        popup.style.display = 'none';
      }, 1000); // زمن الانتقال في animate.css هو 1 ثانية
    }, 1500); // زمن انتظار قبل بدء عملية الانتقال هو 2 ثوانٍ
  };
  function bookfun(){
    alert("you BOOKED the meal");
}
document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
      });