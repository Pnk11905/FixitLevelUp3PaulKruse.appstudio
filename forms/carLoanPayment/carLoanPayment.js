btnCarBackHome.onclick=function(){
  ChangeForm(Intro)
}

function monthlyPayment(p, r, n){
  return  p * (r*((1+r)**n))/(((1+r)**n)-1)
}

btnCarSubmit.onclick=function(){

function transform(x,y,z){
  return (x/y)/z
}

newNum2 = transform(InCarInterest.value,  12, 100)

  lbCarResult.value = monthlyPayment(InCarPrincipal.value, InCarInterest.value,  InYears.value)
}





