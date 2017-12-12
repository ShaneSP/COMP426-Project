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

  def get_teams_and_seed
    if (params.has_key?(:tournament_name) &&
     Tournament.where(tournament_name: params[:tournament_name]).count != 0)
     tournament_id = Tournament.where(tournament_name: params[:tournament_name]).first.id

     command = "
     SELECT Te.seed, Te.team_name
     FROM teams Te, tournaments T
     WHERE Te.tournament_id = T.id AND T.id = #{tournament_id}
     ORDER BY Te.seed, Te.team_name
     "
     result = ActiveRecord::Base.connection.execute(command)

     # [{},{},{},{},{}]
     render json: {result: result}
   else
   render json: {status: false}
 end
  end

  def modify_fen
    if (params.has_key?(:tournament_name) &&
      params.has_key?(:updated_fen))

      tournament_id = Tournament.where(tournament_name: params[:tournament_name]).first.id

      if (Tournament.where(tournament_id: tournament_id).first.nil?)
        render json: {status: false}
      else
        @tournament = Tournament.where(tournament_id: tournament_id).first
        @tournament.fen = params[:updated_fen]
        @tournament.save

        render json: {status: true}
      end
    else
      render json: {status: false}
    end
  end

  def get_fen
    if (params.has_key?(:tournament_name))

      tournament_id = Tournament.where(tournament_name: params[:tournament_name]).first.id

      if (Tournament.where(tournament_id: tournament_id).first.nil?)
        render json: {status: false}
      else
        fen = Tournament.where(tournament_id: tournament_id).first.fen

        render json: {fen: fen}
      end
    else
      render json: {status: false}
    end
  end
end
