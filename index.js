function distanceFromHqInBlocks(blocks) {
  const hq = 42;
  let distance;

  if (blocks >= hq) {
    distance = blocks - hq;
    return distance;
  } else {
    distance = hq - blocks;
    return distance;
  }

};

function distanceFromHqInFeet(feet) {
  const hq = 42;
  let distance;
  if (feet >= hq) {
    distance = ((feet - hq) * 264);
    return distance;
  }
  else {
    distance = ((hq - feet) * 264);
    return distance;
  }
}
function distanceTravelledInFeet(start, destination) {
  const feet = 264;
  let distance;
  if (start <= destination) {
    distance = ((destination - start) * 264);
    return distance;
  }
  else {
    distance = ((start - destination) * 264);
  } return distance;
}
function calculatesFarePrice(start, destination) {
    const feet = 264; 
    const freeSampleDistance = 400;
    const perFootCharge = 0.02;
    const maxDistance = 2500;
    const over2000Charge = 25;
  
    let distance = Math.abs(destination - start) * 264;
  
    if (distance <= freeSampleDistance) {
      return 0;
    } else if (distance > freeSampleDistance && distance <= 2000) {
      return (distance - freeSampleDistance) * 0.02;
    } else if (distance > 2000 && distance <= maxDistance) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  

