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
     render json: {status: false}
   end
  end
  def get_list
    if(params.has_key?(:summoner_name))
      if (Player.where(summoner_name: params[:summoner_name]).first.nil?)
        render json: {status: false}
      else
        # id = Player.where(summoner_name: params[:summoner_name]).first.id
        # @tournaments = Tournament.where(player_id: id)
        # result = []
        # @tournaments.each do |t|
        #
        #   result.push({tournament_name: t.tournament_name, summoner_name: Player.where(id: t.player_id).first.summoner_name})
        # end

        name = params[:summoner_name]
        command = "
        SELECT T.tournament_name, P.summoner_name
        FROM players P, tournaments T
        WHERE P.id = T.player_id AND P.summoner_name = '#{name}'
        "
        result = ActiveRecord::Base.connection.execute(command)

        render json: {result: result}
      end

    else
      # @tournaments = Tournament.all
      # result = []
      # @tournaments.each do |t|

      #   result.push({tournament_name: t.tournament_name, summoner_name: Player.where(id: t.player_id).first.summoner_name})
      # end

      command = "
      SELECT T.tournament_name, P.summoner_name
      FROM players P, tournaments T
      WHERE P.id = T.player_id
      "
      result = ActiveRecord::Base.connection.execute(command)

      render json: {result: result}
    end
  end
end
