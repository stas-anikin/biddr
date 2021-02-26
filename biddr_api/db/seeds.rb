# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bid.delete_all
Auction.delete_all
User.delete_all
PASSWORD = "123"
admin = User.create(
  first_name: "admin",
  last_name: "admin",
  email: "admin@admin.com",
  password: "123",
  is_admin: true,
)

5.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    password: PASSWORD,
  )
end

users = User.all

5.times do
  created_at = Faker::Date.backward(days: 365 * 5)
  end_at = Faker::Date.backward(days: 365 * 5)
  auction = Auction.create(

    title: Faker::Commerce.product_name,
    description: Faker::Hipster.sentence,
    reserve_price: Faker::Number.decimal(l_digits: 2),
    aasm_state: :published,
    end_date: end_at,
    created_at: created_at,
    updated_at: created_at,
    user: users.sample,
  )
  if auction.valid?
    auction.bids = rand(0..5).times.map do
      Bid.new(
        amount: Faker::Number.decimal(l_digits: 2),
        user: users.sample,
      )
    end
  end
end

auctions = Auction.all
users = User.all
bids = Bid.all

puts "Created #{auctions.count} auctions, #{users.count} users, #{bids.count} bids"
