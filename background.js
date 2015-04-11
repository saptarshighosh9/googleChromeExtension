var bgimage=new Array();
bgimage[0]="/images/img1.jpg";
bgimage[1]="/images/img2.jpg";
bgimage[2]="/images/img3.jpg";  
bgimage[3]="/images/img4.jpg";
var rand_num=Math.floor(Math.random()*4);
document.body.style.background='url('+bgimage[rand_num]+')';