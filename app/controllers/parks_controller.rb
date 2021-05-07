class ParksController < ApplicationController

  # GET /parks
  def index
    @parks = Park.all

    render json: @parks
  end

  # GET /parks/1
  def show
    @park = Park.find(params[:id])
    render json: @park 
  end
end

