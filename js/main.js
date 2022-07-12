$(document).ready(() => {

  // open and close sidebar
  $("#sidebar_btn").on("click", () => {
    $(".sidebar-section").toggleClass("open");
  });

  // scroll to section target
  $(".l_sh").on("click", function () {
    let section_target = $(this).attr("href")
    let section_offest = $(section_target).offset().top;
    $("html, body").animate({ scrollTop: section_offest }, { duration: 100, queue: false });
  });

  // function to slide close and open question
  $(".question").on("click", function () {
    $(this).siblings(".answer").slideUp();
    $(this).next().slideDown();
  });

  // countdown timer
  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "12/30/",
        event = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > event) {
      event = dayMonth + nextYear;
    }
    
    const countDown = new Date(event).getTime();
    let x = setInterval(function() {    
  
      const now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("cou-d").innerText = Math.floor(distance / (day)),
        document.getElementById("cou-h").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("cou-m").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("cou-s").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        document.querySelector(".counter").style.display = "none";
        document.getElementById("headline").style.display = "block";
        document.getElementById("headline").innerText = "It's my party!";
        clearInterval(x);
      }

    }, 0)
    }());

  // texterea counter
  $("#usermessage").on("keyup", function () {
    let car_length = $(this).val().length
    if (car_length > 100) {
      $("#text_count").text("your available character finished");
      $("#btn_sum").attr('disabled', true);
    } else {
      $("#text_count").text(100 - car_length);
      $("#btn_sum").attr('disabled', false);
    }
  });
});