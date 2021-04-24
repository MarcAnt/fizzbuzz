const fizzbuzz = (n, divisors = {x: 1, y: 1}) => {
  
    const {x, y} = divisors;
    if( n === 0) return n;
    if( n === undefined) return 'Introduce un valor';
    if( typeof n !== 'number') return 'El tipo debe ser un numero';
    if( !Number.isInteger( n/x ) && !Number.isInteger( n/y ) ) return `No es multiplo de ${x} o ${y}`
   
    if( Number.isInteger( n/x ) && Number.isInteger( n/y )  ) return 'fizzbuzz';  
    if( Number.isInteger( n/x ) ) return 'fizz';
    if( Number.isInteger( n/y ) ) return 'buzz';
    
   
  }
  
  function printFizzBuzz(n,df,db) {

    if(arguments.length <= 2) return;
    
    for(let i = 0; i <= n; i++){
      console.log(`${i}: ${fizzbuzz(i, {x: df, y: db})}`);
    }
    
  }
  
 
  printFizzBuzz(16,3,5)
  

  module.exports = fizzbuzz;