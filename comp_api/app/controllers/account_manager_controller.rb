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
      response = {
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
  def check_valid_name
    if (params.has_key?(:username) &&
      params[:username].length > 2 &&
      params[:username].length < 17 &&
      Player.where(summoner_name: params[:username]).first.nil?)
        render json: 0
    else
      render json: 1
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
    else
      render json: "User not found"
    end
  end
end
