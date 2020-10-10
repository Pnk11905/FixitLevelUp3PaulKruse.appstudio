
//HomeLoanPayment function

function mPaymentHome(p, r, n){
  
  return  p * (r*((1+r)**n))/(((1+r)**n)-1)
  
}

btnSubmit.onclick=function(){
  
  function transform5(x,y,z){
  return (x/y)/z
}

newNum5 = transform5(InIntrestRate.value, 12, 100)

function transform6 (q,w){
  return q * w
}

newNum6 = transform6(InYears.value,12)

payment =   mPaymentHome(InPrincipal.value, newNum5, newNum6).toFixed(2);

lbHomeResult.value = `A home loan for $ ${InPrincipal.value} over ${InYears.value} years at ${InIntrestRate.value} %  interest would have a monthly payment of $ ${payment}`  
}


btnBackHome.onclick=function(){
  ChangeForm(Intro)
}

btnReset.onclick=function(){
  InPrincipal.value = ""
  InIntrestRate.value = ""
  InYears.value = ""
  lbHomeResult.value = ""
}
