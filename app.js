const changeDisplay = (contentId, plusIconId, minusIconId) => {
  // console.log('display - ', document.getElementById(id).style.display);
  const contentDisplay = document.getElementById(contentId).style.display;
  const plusIconDisplay = document.getElementById(plusIconId).style.display;
  const minusIconDisplay = document.getElementById(minusIconId).style.display;

  if(!contentDisplay){
    document.getElementById(contentId).style.display = "block";
  } else{
    document.getElementById(contentId).style.display = contentDisplay === "block" ? "none" : "block";
  }

  if(!plusIconDisplay && !minusIconDisplay){
    document.getElementById(plusIconId).style.display = "none";
    document.getElementById(minusIconId).style.display =  "inline";
  } else {
    document.getElementById(plusIconId).style.display = plusIconDisplay === "inline" ? "none" : "inline";
    document.getElementById(minusIconId).style.display = minusIconDisplay === "inline" ? "none" : "inline";
  }
}