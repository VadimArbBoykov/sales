const getTime = (t) => {
  var seconds = Math.floor( (t/1000) % 60 );  
  var minutes = Math.floor( (t/1000/60) % 60 ); 

  return {
    'total': t,
    'minutes': minutes,  
    'seconds': seconds 
  }
}

export default getTime