class AddVotesCounter < ActiveRecord::Migration[6.1]
  def change
    add_column :chirps, :votes_counter, :integer, default: 0
  end
end
