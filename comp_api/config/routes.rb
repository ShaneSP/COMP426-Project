Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/create_user', to: 'account_manager#create_user'
  get '/login', to: 'account_manager#login'

end
