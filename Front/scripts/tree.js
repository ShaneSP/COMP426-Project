var Current = {
    ROUND : 0,
    GAME : 0,
    TEAM : 0,
    RSEED : 0,
    BSEED : 0,
    RTEAM : "",
    BTEAM : "",
    INDEX : 0
}

var Bracket = {
        ROUNDSTART : "<div class=\"round-"+Current.ROUND+"\">\n",
        EGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div idclass=\"droppable btn-t\"></div>\n" +
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
                "    <div id=\""+Current.INDEX+"\" class=\"droppable btn-t\"></div>\n" +
                "    <div id=\""+(Current.INDEX+1)+"\" class=\"droppable btn-b\"></div>\n" +
                "</div>\n",
        PGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div id=\""+Current.INDEX+"\" class=\"droppable btn-t\"><div id=\""+Current.RSEED+"\" class=\"draggable team-r\">"+Current.RTEAM+"</div></div>\n" +
                "    <div id=\""+(Current.INDEX+1)+"\" class=\"droppable btn-b\"><div id=\""+Current.BSEED+"\" class=\"draggable team-b\">"+Current.BTEAM+"</div></div>\n" +
                "</div>\n",
        RGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div id=\""+Current.INDEX+"\" class=\"droppable btn-t\"></div>\n" +
                "    <div id=\""+(Current.INDEX+1)+"\" class=\"droppable btn-b\"><div id=\""+Current.BSEED+"\" class=\"draggable team-b\">"+Current.BTEAM+"</div></div>\n" +
                "</div>\n",
        BGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div id=\""+Current.INDEX+"\" class=\"droppable btn-t\"><div id=\""+Current.RSEED+"\" class=\"draggable team-r\">"+Current.RTEAM+"</div></div>\n" +
                "    <div id=\""+(Current.INDEX+1)+"\" class=\"droppable btn-b\"></div>\n" +
                "</div>\n",
        BYEGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div id=\""+Current.INDEX+"\" class=\"droppable btn-b\"><div id=\""+Current.RSEED+"\" class=\"draggable team-bye\">"+Current.RTEAM+"</div></div>\n" +
                "</div>\n",
        BYGAME : "<div class=\"game-"+Current.GAME+"\">\n" +
                "    <div id=\""+Current.INDEX+"\" class=\"droppable btn-b\"></div>\n" +
                "</div>\n",
        ROUNDEND : "</div>\n"
    };
}

var Tree = function(fen, container, jsonResponse) {
    var array = jsonResponse.result;
    var rounds = Math.ceil(Math.log2(array.length));
    var teams = array.length;
    var games = array.length - 1;
    var output = "";
    counter = 0;
    for(var i = 0; i < rounds; i++) {
      update();
      output+=Bracket.ROUNDSTART;
      teams = Math.ceil(teams / 2);
      for(var j = 0; j < teams; j++) {
          for(var k = 0; k < 2; k++){
          if(fen[counter] > 0) {
            if(counter % 2 === 0) {
              Current.RTEAM = array[fen[counter]-1].team_name;
              Current.RSEED = fen[counter];
              Current.TEAM++;
              update();
              Current.INDEX++;
            } else {
              Current.BTEAM = array[fen[counter]-1].team_name;
              Current.BSEED = fen[counter];
              Current.TEAM++;
              update();
              Current.INDEX++;
            }
          } else {
            if(counter % 2 === 0) {
              Current.RTEAM = "";
              Current.RSEED = 0;
              update();
              Current.INDEX++;
            } else {
              Current.BTEAM = "";
              Current.BSEED = 0;
              update();
              Current.INDEX++;
            }
          }
          counter++;
        }

        if(Current.RTEAM !== "" && Current.BTEAM !== "") {
          output+=Bracket.PGAME;
        } else if(Current.RTEAM !== "") {
          output+=Bracket.BGAME;
        } else if(Current.BTEAM !== "") {
          output+=Bracket.RGAME;
        } else {
          output+=Bracket.EGAME;
        }
        Current.GAME++;
        update();
      }
      Current.ROUND++;
      output+=Bracket.ROUNDEND;
    }

    // for(var i = 0; i < rounds; i++) {
    //     output+=Bracket.ROUNDSTART;
    //     for(var j = 0; j < Current.RLIST[Current.ROUND].length; j++) {
    //
    //             switch (Current.RLIST[Current.ROUND][j]) {
    //                     case 'n': output += Bracket.PGAME;
    //                     break;
    //                     case 'r': output += Bracket.RGAME;
    //                     break;
    //                     case 'b': output += Bracket.BGAME;
    //                     break;
    //                     case 'e': output += Bracket.EGAME;
    //                     break;
    //                     case 'f': output += Bracket.BYEGAME;
    //                     break;
    //                     case 'x': output += Bracket.BYGAME;
    //                     break;
    //             }
    //             Current.TEAM+=2;
    //             Current.GAME++;
    //             update();
    //     }
    //     output += Bracket.ROUNDEND;
    //     Current.ROUND++;
    //     update();
    // }

    $(container).empty();
    $(container).append(output);
    // console.log(output);
}
