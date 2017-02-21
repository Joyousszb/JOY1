window.onload=function(){
    var latest = document.getElementById('latest-pic');
    var liArr = latest.getElementsByTagName("li");
    var sArr = latest.getElementsByTagName("s");
    
    liArr[0].onmouseover=function(){
      sArr[0].style.display="block";
    }
    liArr[0].onmouseout=function(){
      sArr[0].style.display="none";
    }
    liArr[1].onmouseover=function(){
      sArr[1].style.display="block";
    }
    liArr[1].onmouseout=function(){
      sArr[1].style.display="none";
    }
    liArr[2].onmouseover=function(){
      sArr[2].style.display="block";
    }
    liArr[2].onmouseout=function(){
      sArr[2].style.display="none";
    }
    liArr[3].onmouseover=function(){
      sArr[3].style.display="block";
    }
    liArr[3].onmouseout=function(){
      sArr[3].style.display="none";
    }
}