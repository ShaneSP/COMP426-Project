Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/create_user',           to: 'account_manager#create_user'
  get '/login',                 to: 'account_manager#login'
  get '/get_user_information',  to: 'account_manager#get_user_information'
  get '/get_all_users',         to: 'account_manager#get_all_users'
  get '/check_user',            to: 'account_manager#check_user'

  get '/create_tournament',     to: 'tournament#create_tournament'
  get '/list_tournament',       to: 'tournament#get_list'
  get '/get_teams_and_seed',    to: 'tournament#get_teams_and_seed'
  get '/set_fen',               to: 'tournament#modify_fen'
  get '/get_fen',               to: 'tournament#get_fen'

  get '/create_team',           to: 'team#create_team'
  get '/list_team',             to: 'team#get_list'
  get '/recruit_player',        to: 'team#add_player'
end
