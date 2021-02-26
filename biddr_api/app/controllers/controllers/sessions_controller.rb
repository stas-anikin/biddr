class SessionsController < ApplicationController

    def new
    end

    def create
        user = User.find_by_email params[:email]
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            redirect_to root_path, notice: "#{user.full_name} logged in"
        else
            flash[:alert] = "Unrecognized combination of email and/or password"
            render :new
        end
    end

    def destroy
        session[:user_id] = nil
        redirect_to root_path, notice: "#{user.full_name} logged out"
    end
    
end
