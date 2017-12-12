var Current = {
    ROUND : 0,
    GAME : 0,
    RTEAM : "",
    BTEAM : "",
    RLIST : []
}

var Bracket = {
        ROUNDSTART : "<div class=\"round-"+Current.ROUND+"\">\n",
        EGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-t\"></div>\n" +
                "    <div class=\"droppable btn-b\"></div>\n" +
                "</div>\n",
        PGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-t\"><div id=\""+Current.RTEAM+"\" class=\"draggable team-r\"></div></div>\n" +
                "    <div class=\"droppable btn-b\"><div id=\""+Current.BTEAM+"\" class=\"draggable team-b\"></div></div>\n" +
                "</div>\n",
        RGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-t\"></div>\n" +
                "    <div class=\"droppable btn-b\"><div id=\""+Current.BTEAM+"\" class=\"draggable team-b\"></div></div>\n" +
                "</div>\n",
        BGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-t\"><div id=\""+Current.RTEAM+"\" class=\"draggable team-r\"></div></div>\n" +
                "    <div class=\"droppable btn-b\"></div>\n" +
                "</div>\n",
        BYEGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-b\"><div id=\""+Current.RTEAM+"\" class=\"draggable team-r\"></div></div>\n" +
                "</div>\n",
        BYGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-b\"></div>\n" +
                "</div>\n",
        ROUNDEND : "</div>\n"
};

var update = function () {
    Bracket = {
        ROUNDSTART : "<div class=\"round-"+Current.ROUND+"\">\n",
        EGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-t\"></div>\n" +
                "    <div class=\"droppable btn-b\"></div>\n" +
                "</div>\n",
        PGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-t\"><div id=\""+Current.RTEAM+"\" class=\"draggable team-r\"></div></div>\n" +
                "    <div class=\"droppable btn-b\"><div id=\""+Current.BTEAM+"\" class=\"draggable team-b\"></div></div>\n" +
                "</div>\n",
        RGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-t\"></div>\n" +
                "    <div class=\"droppable btn-b\"><div id=\""+Current.BTEAM+"\" class=\"draggable team-b\"></div></div>\n" +
                "</div>\n",
        BGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-t\"><div id=\""+Current.RTEAM+"\" class=\"draggable team-r\"></div></div>\n" +
                "    <div class=\"droppable btn-b\"></div>\n" +
                "</div>\n",
        BYEGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-b\"><div id=\""+Current.RTEAM+"\" class=\"draggable team-r\"></div></div>\n" +
                "</div>\n",
        BYGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-b\"></div>\n" +
                "</div>\n",
        ROUNDEND : "</div>\n"
    };
}

var Tree = function(fen, container, parse) {
    
    Current.RLIST = fen.split("/");
    Current.RTEAM = "team1";
    Current.BTEAM = "team2";
    var rounds = Current.RLIST.length;
    var teams = fen.length - Current.RLIST.length + 2;
    var games = fen.length - Current.RLIST.length + 1;

    var output = "";

    for(var i = 0; i < rounds; i++) {
        output+=Bracket.ROUNDSTART;
        update();
        for(var j = 0; j < Current.RLIST[Current.ROUND].length; j++) {
            switch (Current.RLIST[Current.ROUND][j]) {
                case 'n': output += Bracket.PGAME;
                break;
                case 'r': output += Bracket.RGAME;
                break;
                case 'b': output += Bracket.BGAME;
                break;
                case 'e': output += Bracket.EGAME;
                break;
                case 'f': output += Bracket.BYEGAME;
                break;
                case 'x': output += Bracket.BYGAME;
                break;
            }
            Current.GAME++;
            update();
        }
        output += Bracket.ROUNDEND;
        Current.ROUND++;
        update();
    }

    $(container).empty();
    $(container).append(output);
}