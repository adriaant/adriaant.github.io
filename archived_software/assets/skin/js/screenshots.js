function showPic(anImg)
{
  if (!document.getElementById("placeholder")) return true;
  if (!document.height) return true;

  var objX = findPosX(anImg);
  var objY = findPosY(anImg);
  
  var source = anImg.getAttribute("href");
  var alt = anImg.getAttribute("title");
  var dims = alt.split(" ");
  var w = parseInt(dims[0]);
  var h = parseInt(dims[1]);
  
  objY = objY - h;
  if ( objY < 50 ) objY = 50;
  
  var placeholderImage = document.getElementById("placeholderImage");
  placeholderImage.setAttribute("src", source);
  placeholderImage.style.top = objY + 'px';
  objX = (document.body.clientWidth)/2 - w/2;
  placeholderImage.style.left = objX + 'px';

  var placeholderClose = document.getElementById("placeholderClose");
  placeholderClose.style.top = (objY-10) + 'px';
  placeholderClose.style.left = (objX-30) + 'px';

  var placeholderLoad = document.getElementById("placeholderLoad");
  placeholderLoad.style.top = objY + 'px';
  placeholderLoad.style.left = objX + 'px';

  var placeholder = document.getElementById("placeholder");
  placeholder.style.height = document.height + 400 + 'px';
  placeholder.style.width = document.width + 'px';
  placeholder.style.display = 'block';

  window.scrollTo(0,objY-50);
  return false;
}

function hidePlaceholder()
{
  var placeholder = document.getElementById("placeholder");
  placeholder.style.display = 'none';
  var placeholderImage = document.getElementById("placeholderImage");
  placeholderImage.setAttribute("src", "http://infinite-sushi.com/img/blank.png");
}

function preparePlaceholder()
{
  if ( !document.createElement &&
       !document.createTextNode &&
       !document.getElementById &&
       !document.getElementById("screenshots") ) return false;

  var divElt = document.createElement('div');
  divElt.setAttribute("id", "placeholder");

  var pElt = document.createElement("p");
  pElt.setAttribute("id", "placeholderLoad");
  var textElt = document.createTextNode("Loading...");
  pElt.appendChild(textElt);
  divElt.appendChild(pElt);

  var imgElt = document.createElement("img");
  imgElt.setAttribute("src","http://infinite-sushi.com/img/blank.png");
  imgElt.setAttribute("id", "placeholderImage");
  divElt.appendChild(imgElt);

  var closeElt = document.createElement('img');
  closeElt.setAttribute("id","placeholderClose");
  closeElt.setAttribute("src","http://infinite-sushi.com/img/closebox.png");
  closeElt.onclick = function(){ return hidePlaceholder(); }
  divElt.appendChild(closeElt);

  document.getElementsByTagName("body")[0].appendChild(divElt);
}

function prepareGallery()
{
  if ( !document.getElementsByTagName &&
       !document.getElementById &&
       !document.getElementById("screenshots") ) return false;

  var gallery = document.getElementById("screenshots");
  var links = gallery.getElementsByTagName("a");
  for ( var i=0; i < links.length; i++)
  {
    links[i].onclick = function(){ return showPic(this); }
  }
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
