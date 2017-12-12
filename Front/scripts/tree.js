var Current = {
    ROUND : 0,
    GAME : 0,
    TEAM : 0,
    RSEED : 0,
    BSEED : 0,
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
                "    <div class=\"droppable btn-t\"><div id=\""+Current.RTEAM+"\" class=\"draggable team-r\">"+Current.RTEAM+"</div></div>\n" +
                "    <div class=\"droppable btn-b\"><div id=\""+Current.BTEAM+"\" class=\"draggable team-b\">"+Current.BTEAM+"</div></div>\n" +
                "</div>\n",
        RGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-t\"></div>\n" +
                "    <div class=\"droppable btn-b\"><div id=\""+Current.BTEAM+"\" class=\"draggable team-b\">"+Current.BTEAM+"</div></div>\n" +
                "</div>\n",
        BGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-t\"><div id=\""+Current.RTEAM+"\" class=\"draggable team-r\">"+Current.RTEAM+"</div></div>\n" +
                "    <div class=\"droppable btn-b\"></div>\n" +
                "</div>\n",
        BYEGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-b\"><div id=\""+Current.RTEAM+"\" class=\"draggable team-r\">"+Current.RTEAM+"</div></div>\n" +
                "</div>\n",
        BYGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div class=\"droppable btn-b\"></div>\n" +
                "</div>\n",
        ROUNDEND : "</div>\n"
    };
}

var Tree = function(fen, container, jsonResponse) {
    var array = jsonResponse.result;
    Current.RLIST = fen.split("/");
    var rounds = Current.RLIST.length;
    var teams = fen.length - Current.RLIST.length + 2;
    var games = fen.length - Current.RLIST.length + 1;

    var output = "";

    for(var i = 0; i < rounds; i++) {
        output+=Bracket.ROUNDSTART;
        for(var j = 0; j < Current.RLIST[Current.ROUND].length; j++) {
                if(Current.ROUND === 0 && array[Current.TEAM] !== undefined) {
                        Current.RSEED = array[Current.TEAM].seed;
                        Current.RTEAM = array[Current.TEAM].team_name;
                        update();
                        if(Current.ROUND === 0 && array[Current.TEAM+1] !== undefined) {
                          Current.BSEED = array[Current.TEAM+1].seed;
                          Current.BTEAM = array[Current.TEAM+1].team_name;
                          update();
                        } else {
                                Current.BTEAM = "null";
                                Current.BSEED = -1;
                                update();
                        }
                } else {
                        Current.RTEAM = "null";
                        Current.RSEED = -1;
                        update();
                }
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
                Current.TEAM+=2;
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
