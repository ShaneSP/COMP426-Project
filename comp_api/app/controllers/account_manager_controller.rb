class AccountManagerController < ApplicationController
  def create_user
    if (params.has_key?(:username) &&
       params.has_key?(:password) &&
       Player.where(summonerName: params[:username]).count == 0)
      @user = Player.new
      @user.summonerName = params[:username]
      @user.password = params[:password]
      @user.save
      render json: @user
    else
      render json: "Failed to create user (username taken or too few fields)"
    end
  end
  def login
    if (params.has_key?(:username) &&
       params.has_key?(:password) &&
       !User.where(name: params[:username]).select(:password).first.nil? &&
       User.wxhere(name: params[:username]).select(:password).first.password == params[:password])
      render json: "Login success"
    else
      render json: "Login failed"
    end
  end
end
