class VotesController < ApplicationController
  protect_from_forgery with: :null_session

  def upvote
    Chirp.increment_counter(:votes_counter, params[:chirp_id])
  end

  def downvote
    Chirp.decrement_counter(:votes_counter, params[:chirp_id])
  end
end
