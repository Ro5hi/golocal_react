Rails.application.routes.draw do
  post "/api/v1/signup", to: "api/v1/users#create"
  post "/api/v1/login", to: "api/v1/sessions#create"
  post "/api/v1/newpost", to: "api/v1/posts#create"
  post "/api/v1/deletepost/:id", to: "api/v1/posts#destroy"
  get "/api/v1/profile", to: "api/v1/users#show"
  get "/api/v1/get_session", to: "api/v1/sessions#get_session"
  patch "/api/v1/editprofile", to: "api/v1/users#update"
  delete "/api/v1/logout", to: "api/v1/sessions#destroy"
  # change routes
  namespace :api do 
    namespace :v1 do 
      resources :users
      resources :businesses
      resources :post
      resources :sessions

    end
  end
end