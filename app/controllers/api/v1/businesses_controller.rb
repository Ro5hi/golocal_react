class API::V1::BusinessesController < ApplicationController

    before_action :set_business, only: [:show, :update]

    def index
        @business = Business.all 
        render json: @business
    end 

    def show
        render json: @business 
    end 

    def create
        @business = Business.new(business_params)
        if @business.save
            render json: @business, status: :created
        else 
            render json: @business.errors, status: :unprocessable_entity
        end 
    end 

    def update
        if @business.update(business_params)
            render json: @business 
        else 
            render json: @business.errors, status: unprocessable_entity 
        end
    end 

    private 

    def set_business
        @business = Business.find_by(params[:id])
    end

    def business_params
        params.require(:business).permit(:name, :address, :city, :country, :category)
    end

end