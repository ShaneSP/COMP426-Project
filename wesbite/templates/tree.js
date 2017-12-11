var Tree = function(fen, container) {
    var Current = {
        ROUND : 1,
        GAME : 1,
        PLAYER : 1,
        FEN : fen
    }

    var Bracket = {
        ROUNDSTART : "<ul class=\"round-"+Current.ROUND+"\">",
        GAME : "<li class=\"game-"+Current.GAME+"\">\n" +
               "    <div class=\"droppable btn-t\"></div>\n",
        GAMEEND : "    <div class=\"droppable btn-b\"></div>\n" +
                  "</li>\n",
        ROUNDEND : "</ul>\n"
    }

    $(container).append("<ol>\n");

    $(container).append(build(Current.FEN));

    $(container).append("</ol>");

}

Tree.prototype.build = function(fen) {
    if(fen.length == 0) {
        return "";
    } else if(Current.GAME < Math.pow(2, Math.log2(fen.length)) - 1) {
        //We have more games to add, logic may be off by a little. This doesn't seem like a valid base case.
    }
}