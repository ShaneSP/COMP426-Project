class TeamController < ApplicationController
    def create_team
        if (params.has_key?(:team_name) &&
            params.has_key?(:tournament_name) &&
            params.has_key?(:seed))

            tournament_id = Tournament.where(tournament_name: params[:tournament_name]).first.id

            if(Team.where(team_name: params[:team_name], tournament_id: tournament_id).count == 0) &&
                Team.where(seed: params[:seed], tournament_id: tournament_id).count == 0))
                @team = Team.new
                @team.team_name = params[:team_name]
                @team.tournament_id = tournament_id
                @team.seed = params[:seed]
                @team.save
                render json: @team
            end
        else
            render json: {status: false}
        end
    end

    def get_list
        if (params.has_key?(:tournament_name))

            tournament_id = Tournament.where(tournament_name: params[:tournament_name]).first.id

            if (Team.where(tournament_id: tournament_id).first.nil?)
                render json: {status: false}
            else
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
        if (params.has_key?(:tournament_name) &&
            params.has_key?(:seed) &&
            params.has_key?(:summoner_name))

            tournament_id = Tournament.where(tournament_name: params[:tournament_name]).first.id

            if (Team.where(tournament_id: tournament_id, seed: params[:seed]).first.nil? ||
                Player.where(summoner_name: params[:summoner_name]).first.nil?)
                render json: {status: false}
            else
                seed = params[:seed]

                command = "
                SELECT T.id
                FROM teams T
                WHERE T.tournament_id = #{tournament_id} AND t.seed = #{seed}
                "
                team_id = ActiveRecord::Base.connection.execute(command)[0]["id"]
                name = params[:summoner_name]
                command = "
                SELECT P.id
                FROM players P
                WHERE P.summoner_name = '#{name}'
                "
                player_id = ActiveRecord::Base.connection.execute(command)[0]["id"]

                if(PlayersAndTeam.where(team_id: team_id, player_id: player_id).count == 0)
                    @registration = PlayersAndTeam.new
                    @registration.team_id = team_id
                    @registration.player_id = player_id
                    @registration.save
                    render json: @registration
                else
                    render json: {status: false}
                end
            end
        end
    end
end
