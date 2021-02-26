class Api::ApplicationController < ApplicationController

    skip_before_action(:verify_authenticity_token)

    private

    def authenticate_user!
        unless current_user.present? 
           render json: { status: 404 }, status: 404 
        end
    end
    
end
