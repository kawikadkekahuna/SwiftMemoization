var SwiftMemoization = (function(){
  var CACHE = {};

  return{  
    find: function(query){
      if(!CACHE[query]){
        CACHE[query] = document.querySelector(query);
        return CACHE[query];
      }else{
        return CACHE[query];
      }
    }
  } 
})();
