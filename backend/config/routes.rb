Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :notes
      resources :users
  # get '/api/v1/users'
  # get '/api/v1/notes'
  # post '/api/v1/notes'
  # patch '/api/v1/notes/:id'

    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
