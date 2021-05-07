class RidesController < ApplicationController

  # GET /rides
  def index
    @rides = Ride.all

    render json: @rides
  end

  # GET /rides/1
  def show
    @ride = Ride.find(params[:id])
    render json: @ride 
  end
end

