class AccountManagerController < ApplicationController
  def create_user
    # command = "
    #   SELECT P.first_name, T.team_name
    #   FROM players P, players_and_teams PAT, teams T
    #   WHERE P.id = PAT.player_id AND PAT.team_id = T.id"
    #
    # records_array = ActiveRecord::Base.connection.execute(command)
    # render json: records_array

    if (params.has_key?(:username) &&
      params.has_key?(:password) &&
      params.has_key?(:firstname) &&
      params.has_key?(:lastname) &&
      Player.where(summoner_name: params[:username]).count == 0)
      
      @user = Player.new
      @user.summoner_name = params[:username]
      @user.password = params[:password]
      @user.first_name = params[:firstname]
      @user.last_name = params[:lastname]
      @user.save
      render json: @user
    else
      response = {status: false,
        text: "Failed to create user, either exists or bad format. required format is create_user?username=RichardBaybaay&password=passgoeshere&firstname=Richard&lastname=Lang"
      }
      render json: response
    end
  end
  
  def login
    if (params.has_key?(:username) &&
      params.has_key?(:password) &&
      !Player.where(summoner_name: params[:username]).select(:password).first.nil? &&
      Player.where(summoner_name: params[:username]).select(:password).first.password == params[:password])
      
      render json: {status: true, name: params[:username]}
    else
      render json: {status: false}
    end
  end

  def get_user_information
    if (params.has_key?(:username) &&
      !Player.where(summoner_name: params[:username]).first.nil?)
      
      @user = Player.where(summoner_name: params[:username]).first
      info = {
        summoner_name: @user.summoner_name,
        first_name: @user.first_name,
        last_name: @user.last_name,
        games_played: @user.games_played,
        games_won: @user.games_won,
        tournaments_played: @user.tournaments_played,
        tournaments_won: @user.tournaments_won
      }

      render json: info

      # username = params[:username]
      # command = "
      # SELECT P.summoner_name, P.first_name, P.last_name, P.tournaments_played, P.tournaments_won, P.games_played, P.games_won
      # FROM players P
      # WHERE P.summoner_name = '#{username}'
      # "
      # record = ActiveRecord::Base.connection.execute(command)
      # render json: record.first

    else
      render json: {status: false}
    end
  end

  def get_all_users
    command = "
    SELECT P.summoner_name
    FROM players P
    ORDER BY P.summoner_name
    "
    records_array = ActiveRecord::Base.connection.execute(command)

    names = []
    records_array.each do |v|
      names.push(v['summoner_name'])
    end

    render json: {names: names}
  end

  def check_user
    if (params.has_key?(:username) &&
      params[:username].length > 2 &&
      params[:username].length < 17 &&
      Player.where(summoner_name: params[:username]).first.nil?)
      
      render json: {status: true}
    else 
      render json: {status: false}
    end
  end
end
