class TournamentController < ApplicationController
  def create_tournament
    if (params.has_key?(:tournament_name) &&
     params.has_key?(:summoner_name) &&
     Tournament.where(tournament_name: params[:tournament_name]).count == 0)

     @tournament = Tournament.new
     @tournament.tournament_name = params[:tournament_name]
     @tournament.tournament_winner_id = 0
     @tournament.fen = ""
     @tournament.player_id = Player.where(summoner_name: params[:summoner_name]).first.id
     @tournament.save
     render json: @tournament
   else
     render json: {failed: "error"}
   end
  end
  def get_list
    @tournaments = Tournament.all

    result = []
    @tournaments.each do |t|

      result.push({tournament_name: t.tournament_name, summoner_name: Player.where(id: t.player_id).first.summoner_name})
    end
    render json: result
  end
end
