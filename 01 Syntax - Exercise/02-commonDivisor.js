function gcd(a, b) {

    let result = gcdCalc(a, b);
    console.log(result);

    function gcdCalc(a, b) {
        if (!b) {
          return a;
        }
      
        return gcdCalc(b, a % b);
    }

}
gcd(2154, 458);