var imgs = [
      {
            img: "https://images.wallpaperscraft.com/image/interior_design_style_home_house_room_kitchen_75557_1920x1080.jpg"
      },
      {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS567mmpFbx_wIhS6cQXpiHZvLmSWStyebQ5A&usqp=CAU"
      },
      {
            img: "https://images.wallpaperscraft.com/image/interior_design_style_home_house_room_kitchen_75557_1920x1080.jpg"
      },
      {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4jkg4KQ2fFXlp3lzdLyi6t8oWN4wPETpHOA&usqp=CAU"
      }
];


var current = 0;
var slider = document.getElementById("slider");


function a(url) {
      let elem = document.createElement('img');
      elem.src = url;
      return elem;
}

function currentSlider(index) {
      slider.innerHTML = '';
      let image = imgs[index];
      slider.append(a(image.img));
}

function changeImg() { 
      if (current < imgs.length) { 
            current++;
      } else if (current === imgs.length) {
            current = 0;
      }
}

currentSlider(0);
setInterval(function () { 
      changeImg();
      currentSlider(current);
}, 1000);