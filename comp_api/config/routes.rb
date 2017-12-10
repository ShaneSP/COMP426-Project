Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/create_user', to: 'account_manager#create_user'
  get '/login', to: 'account_manager#login'
  get '/check_valid_name', to: 'account_manager#check_valid_name'
  get '/get_user_information', to: 'account_manager#get_user_information'
end
