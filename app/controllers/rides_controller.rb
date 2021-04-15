class RidesController < ApplicationController
  before_action :set_ride, only: [:show]

  # GET /rides
  def index
    @rides = Ride.all

    render json: @rides
  end

  # GET /rides/1
  def show
    render json: @ride
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ride
      @ride = Ride.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ride_params
      params.require(:ride).permit(:name, :img_url, :height, :category)
    end
end
