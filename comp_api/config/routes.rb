Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/create_user',           to: 'account_manager#create_user'
  get '/login',                 to: 'account_manager#login'
  get '/check_valid_name',      to: 'account_manager#check_valid_name'
  get '/get_user_information',  to: 'account_manager#get_user_information'
  get '/get_all_users',         to: 'account_manager#get_all_users'

  get '/create_tournament',     to: 'tournament#create_tournament'
  get '/list_tournament',       to: 'tournament#get_list'

  get '/create_team',           to: 'team#create_team'
  get '/list_team',             to: 'team#get_list'
  get '/recruit_player',        to: 'team#add_player'
end
