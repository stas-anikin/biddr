FactoryBot.define do
  factory :auction do
    title { "MyString" }
    description { "MyText" }
    starting_bid { 1.5 }
    active_bid { 1.5 }
    reserve_price { 1.5 }
    end_date { "2019-12-02 10:44:19" }
  end
end
