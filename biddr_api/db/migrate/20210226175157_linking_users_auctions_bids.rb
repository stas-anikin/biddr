class LinkingUsersAuctionsBids < ActiveRecord::Migration[6.1]
  def change
    add_reference :auctions, :user, null: true, foreign_key: true
    add_reference :bids, :user, null: true, foreign_key: true
    add_column :users, :is_admin, :boolean, default: false
  end
end
