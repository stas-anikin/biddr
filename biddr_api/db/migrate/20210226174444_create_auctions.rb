class CreateAuctions < ActiveRecord::Migration[6.1]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :body
      t.datetime :end_date
      t.float :reserve_price
      t.timestamps
    end
  end
end