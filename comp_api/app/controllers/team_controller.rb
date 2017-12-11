class TeamController < ApplicationController
    def create_team
        if (params.has_key?(:team_name) &&
            params.has_key?(:tournament_id) &&
            params.has_key?(:seed))
            @team = Team.new
            @team.team_name = params[:team_name]
            @team.tournament_id = params[:tournament_id]
            @team.seed = params[:seed]
            @team.save
            render json: @team
        else
            render json: {status: false}
        end
    end

    def get_list
        if (params.has_key?(:tournament_id))
            if (Team.where(tournament_id: params[:tournament_id]).first.nil?)
                render json: {status: false}
            else
                tournament_id = params[:tournament_id]
                command = "
                SELECT T.seed, T.team_name
                FROM teams T
                WHERE T.tournament_id = #{tournament_id}
                ORDER BY T.seed
                "
                result = ActiveRecord::Base.connection.execute(command)
                
                render json: {result: result}
            end
        else
            command = "
            SELECT T.tournament_id, T.seed, T.team_name
            FROM teams T
            ORDER BY T.tournament_id, T.seed
            "
            result = ActiveRecord::Base.connection.execute(command)
            
            render json: {result: result}
        end
    end

    def add_player
        if (params.has_key?(:tournament_id) &&
            params.has_key?(:seed) &&
            params.has_key?(:player_id))
            if (Team.where(tournament_id: params[:tournament_id], seed: params[:seed]).first.nil? ||
                Player.where(id: params[:player_id]).first.nil?)
                render json: {status: false}
            else
                @registration = Players_and_team.new
                @registration.team_id = Team.where(tournament_id: params[:tournament_id], seed: params[:seed]).select(:id).first
                @registration.player_id = Player.where(id: params[:player_id].select(:id).first)
                @registration.save
                render json: @registration
            end
        end
    end
end