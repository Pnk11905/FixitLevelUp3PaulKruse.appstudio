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

carPayment  =  monthlyPayment(InCarPrincipal.value, newNum2,  InMonths1.value).toFixed(2);

  lbCarResult.value = `A car loan for $ ${InCarPrincipal.value} over ${InMonths1.value} months at ${InCarInterest.value} %  interest would have a monthly payment of $ ${carPayment}`
}


btnCarReset.onclick=function(){
  InCarPrincipal.value = ""
  InCarInterest.value = ""
  InMonths1.value = ""
  lbCarResult.value = ""
}
