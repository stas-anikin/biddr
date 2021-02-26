class Api::V1::SessionsController < Api::ApplicationController

    def create
        user = User 
            .find_by(email: params[:email])
            .try(:authenticate, params[:password])
        if user 
            session[:user_id] = user.id 
            render json: {
                status: :created,
                logged_in: true,
                user: user
            }
        else 
            render json: { status: 404 }
        end
    end

    def destroy 
        session[:user_id] = nil 
        render(json: { status: 200}, status: 200)
    end

end
