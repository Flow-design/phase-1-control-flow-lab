function scuberGreetingForFeet(feet){
  if(feet <  400){
    return 'This one is on me!'
}
if(feet >400 && feet <2000  ){
  return 'That will be twenty bucks.'
}
if(feet >= 2000 && feet  < 2500){
  return 'I will gladly take your thirty bucks.'
}
if(feet > 2500){
  return 'No can do.'
}
}
function ternaryCheckCity(town){
  if (town === 'NYC' ) {
    return 'Ok, sounds good.'
} else {
  return 'No go.'
} 
}
function switchOnCharmFromTip(Tip){
  switch(Tip){
    case 'generous':
      return 'Thank you so much.'
      case 'not as generous':
        return 'Thank you.'
        case 'thanks for everything':
          return 'Bye.'
  }
}