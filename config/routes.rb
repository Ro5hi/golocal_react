Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/api/v1/login", to: "api/v1/sessions#create"
  post "/api/v1/signup", to: "api/v1/user#create"
  post "/api/v1/newpost", to: "api/v1/posts#create"
  get "/api/v1/profile", to: "api/v1/users#show"
  get "/api/1/get_session", to: "api/v1/sessions#get_session"
  delete "/api/v1/logout" to: "/api/v1/sessions#destroy"

  namespace :api do 
    namespace :v1 do 
      resources :users
      resources :businesses
      resources :post
  end
  
end
