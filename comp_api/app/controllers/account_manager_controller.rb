class AccountManagerController < ApplicationController
  def create_user
    if (params.has_key?(:username) &&
       params.has_key?(:password) &&
       params.has_key?(:firstname) &&
       params.has_key?(:lastname) &&
       Player.where(summonerName: params[:username]).count == 0)
      @user = Player.new
      @user.summonerName = params[:username]
      @user.password = params[:password]
      @user.firstName = params[:firstname]
      @user.lastName = params[:lastname]
      @user.save
      render json: @user
    else
      render json: "Failed to create user, either exists or bad format. required format is create_user?username=RichardBaybaay&password=passgoeshere&firstname=Richard&lastname=Lang"
    end
  end
  def login
    if (params.has_key?(:username) &&
       params.has_key?(:password) &&
       !Player.where(summonerName: params[:username]).select(:password).first.nil? &&
       Player.where(summonerName: params[:username]).select(:password).first.password == params[:password])
      render json: "Login success"
    else
      render json: "Login failed"
    end
  end
  def check_valid_name
    if (params.has_key?(:username) &&
      params[:username].length > 2 &&
      params[:username].length < 17 &&
      Player.where(summonerName: params[:username]).first.nil?)
        render json: 0
    else
      render json: 1
    end
  end
  def get_user_information
    if (params.has_key?(:username) &&
        !Player.where(summonerName: params[:username]).first.nil?)
      @user = Player.where(summonerName: params[:username]).first
      info = {
        summonerName: @user.summonerName,
        firstName: @user.firstName,
        lastName: @user.lastName,
        gamesPlayed: @user.gamesPlayed,
        gamesWon: @user.gamesWon,
        tournamentsPlayed: @user.tournamentsPlayed,
        tournamentsWon: @user.tournamentsWon
      }
      render json: info
    else
      render json: "User not found"
    end
  end
end
