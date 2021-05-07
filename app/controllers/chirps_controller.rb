class ChirpsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    render json: Chirp.all.order(created_at: :desc)
  end

  def create
    chirp = Chirp.create(chirp_params)
    ChirpNotification.perform_later(chirp.id)
    render json: chirp
  end

  private

  def chirp_params
    params.require(:chirp).permit(:text)
  end
end
