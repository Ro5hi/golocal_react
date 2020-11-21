Rails.application.routes.draw do
  post "/api/v1/signup", to: "api/v1/users#create"
  post "/api/v1/login", to: "api/v1/sessions#create"
  post "/api/v1/newpost", to: "api/v1/posts#create"
  post "/api/v1/deletepost/:id", to: "api/v1/posts#destroy"
  get "/api/v1/profile/:id", to: "api/v1/users#show"
  get "/api/v1/get_session", to: "api/v1/sessions#current_session"
  patch "/api/v1/editprofile/:id", to: "api/v1/users#update"
  patch "/api/v1/posts/:id/edit", to: "api/v1/posts#update"
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