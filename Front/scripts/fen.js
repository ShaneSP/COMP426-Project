


var fenGen = function(teams) {
    var arr = [];
    var games = Math.ceil(Math.pow(2, Math.log2(teams)));
    for(var i = 0; i < games * 2; i++) {
      if(i < teams) {
        arr[i] = i+1;
      } else {
        arr[i] = 0;
      }
    }
    return arr;
    // if(teams === 2) {
    //     return "e";
    // } else if(teams < 2) {
    //     return "";
    // }
    // var fen = "";
    // var bye = false;
    // if(teams % 2 !== 0) {
    //     teams++;
    //     bye = true;
    // }
    //
    // var games = teams / 2;
    //
    // while(games > 0) {
    //     if(games === 1 && bye && round === 0) {
    //         fen+="f";
    //     } else if(games === 1 && bye) {
    //         fen+="x";
    //     }else if(round === 0) {
    //         fen+="n";
    //     } else {
    //         fen+="e";
    //     }
    //     games--;
    // }
    // console.log(teams + " ?? " + Math.floor(teams / 2) / 2);
    //
    // return fen + "/" + fenGen(Math.floor(teams / 2), ++round);
}
