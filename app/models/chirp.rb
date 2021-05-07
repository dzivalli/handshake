class Chirp < ApplicationRecord
  validates :votes_counter, numericality: { greater_than_or_equal_to: 0 }
  validates :text, presence: true
end
