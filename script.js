let i=0, imgArr=new Array();
imgArr[0] = "https://upload.wikimedia.org/wikipedia/zh/thumb/4/49/National_Chiayi_University_seal.svg/1200px-National_Chiayi_University_seal.svg.png";
imgArr[1] = "https://www.ncyu.edu.tw/Uploads/Icon/9a1327b4-6f82-43c1-b994-425704ae0fe8.png";
imgArr[2] = "https://images.1111.com.tw/discussPic/13/47735613_145030368.133016.jpg";

function showImg(){
  document.getElementById('ico').src = imgArr[i];
  i = (i+1) % 3;
}

function show(){
  setInterval(showImg, 2000);
}