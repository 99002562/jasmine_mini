
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
function onMul(){
  //take input values
  const fisrtVal=$get("val1").value;
  const secondVal=$get("val2").value;
  const result = mulFunc(fisrtVal, secondVal);
  $get("spResult").innerText = result;

}
function onDiv(){
  //take input values
  const fisrtVal=$get("val1").value;
  const secondVal=$get("val2").value;
  const result = divFunc(fisrtVal, secondVal);
  $get("spResult").innerText = result;

}
