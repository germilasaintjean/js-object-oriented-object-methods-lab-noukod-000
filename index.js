function BoardMember(name, homeState, training)
{
  this.name = name
  this.homeState = homeState
  this.training = training
  this.sayHi = function(){
    console.log(`Hi, my name is ${name}. I am from ${homeState}, and  I was training in ${training}.`)
  }
}

function veto()
{
  console.log("No, Imust disagree")
}
