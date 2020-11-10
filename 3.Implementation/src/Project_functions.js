
const getNumber = function(val){
  if(isNaN(val))
      return 0;
  else 
      return parseFloat(val);
}

const $get = function(id){
  return document.getElementById(id);
}
function onAdd(){
  //take input values
  const fisrtVal=$get("val1").value;
  const secondVal=$get("val2").value;
  const result = addFunc(fisrtVal, secondVal);
  $get("spResult").innerText = result;

}
function onSub(){
  //take input values
  const fisrtVal=$get("val1").value;
  const secondVal=$get("val2").value;
  const result = subFunc(fisrtVal, secondVal);
  $get("spResult").innerText = result;

}