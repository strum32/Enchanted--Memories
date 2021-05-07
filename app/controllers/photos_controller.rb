class PhotosController < ApplicationController
  before_action :set_photo, only: [:show, :update]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /photos
  def index
    @photos = Photo.all

    render json: @photos
  end

  # GET /photos/1
  def show
    @photo = Photo.find(params[:id])
    render json: @photo
  end

  # POST /photos
  def create
    @photo = Photo.new(photo_params)
    @photo.user = @current_user

    if @photo.save
      render json: @photo, status: :created, location: @photo
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /photos/1
  def update
    @photo = @current_user.photos.find(params[:id])
    if @photo.update(photo_params)
      render json: @photo
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /photos/1
  def destroy
    @photo = @current_user.photos.find(params[:id])
    @photo.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_photo
      @photo = Photo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def photo_params
      params.require(:photo).permit(:title, :user_id, :img_url)
    end
end
