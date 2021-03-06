Rails.application.routes.draw do
  resources :rides, only: [:index, :show]
  resources :parks, only: [:index, :show]
  resources :photos
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
