User.destroy_all
Auction.destroy_all
Bid.destroy_all

PASSWORD = "123"

super_user = User.create(
  first_name: "test",
  last_name: "user",
  email: "test@test.com",
  password: PASSWORD,
  is_admin: true,
)

10.times do
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

10.times do
  user = users.sample
  a = Auction.create(
    title: Faker::Superhero.name,
    body: Faker::Coffee.notes,
    reserve_price: Faker::Number.decimal(l_digits: 2),
    end_date: Faker::Date.forward(days: 90),
    created_at: Faker::Date.backward(days: 365 * 5),
    updated_at: Faker::Date.backward(days: 365 * 5),
    user_id: user.id,
  )

  if a.valid?
    rand(0..5).times.each do
      user = users.sample
      b = Bid.create(
        price: Faker::Number.decimal(l_digits: 2),
        user_id: user.id,
        auction: a,
      )
    end
  end
end
auctions = Auction.all
users = User.all
bids = Bid.all

puts "Created #{auctions.count} auctions, #{users.count} users, #{bids.count} bids"
