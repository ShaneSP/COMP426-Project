


var fenGen = function(teams, round) {
    if(teams === 2) {
        return "e";
    }
    var fen = "";
    var bye = false;
    if(teams % 2 !== 0) {
        teams++;
        bye = true;
    }

    var games = teams / 2;

    while(games > 0) {
        if(games === 1 && bye && round === 0) {
            fen+="f";
        } else if(games === 1 && bye) {
            fen+="x";
        }else if(round === 0) {
            fen+="n";
        } else {
            fen+="e";
        }
        games--;
    }
    console.log(teams + " :: " + Math.floor(teams / 2) / 2);

    return fen + "/" + fenGen(Math.floor(teams / 2), ++round)
}

