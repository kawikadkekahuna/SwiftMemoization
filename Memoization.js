var SwiftQuery = (function(){
  var CACHE = {};

  return{  
    find: function(query){
      if(!CACHE[query]){
        CACHE[query] = document.querySelector(query);
        console.log('add it in');
        return CACHE[query];
      }else{
        return CACHE[query];
      }
    }
  } 
})();
