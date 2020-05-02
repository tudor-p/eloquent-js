// Retry
class MultiplicatorUnitFailure extends Error {}

/*
function thisOne (a, b) {
    let result = 0
    for (;;) {
        try {
            result = primitiveMultiply (a,b) 
            break
        } catch (e) {
            if (e instanceof MultiplicationUnitFailure) {
                console.log("The function malfunctioned")
            } else throw e 
        }
    }
    return result
}
*/

function reliableMultiply(a, b) {
    for (;;) {
      try {
        return primitiveMultiply(a, b);
      } catch (e) {
        if (!(e instanceof MultiplicatorUnitFailure))
          throw e;
      }
    }
  }


function primitiveMultiply (a,b) {
    if (Math.random() < .2) {
        return a*b
    } else {
        throw new MultiplicatorUnitFailure("Not this time")
    }
}

console.log(reliableMultiply(8,8))


