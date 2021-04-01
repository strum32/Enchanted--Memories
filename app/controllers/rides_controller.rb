class RidesController < ApplicationController
  before_action :set_ride, only: [:show, :update, :destroy]

  # GET /rides
  def index
    @rides = Ride.all

    render json: @rides
  end

  # GET /rides/1
  def show
    render json: @ride
  end
