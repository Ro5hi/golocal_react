class ApplicationController < ActionController::API
    include ::ActionController::Cookies

    def current_user
        puts "Current User: #{session[:user_id]}"
        User.find_by(id: session[:user_id])
    end 

    def logged_in?
        !!current_user
    end 

end
