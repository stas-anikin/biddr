class AuctionSerializer < ActiveModel::Serializer

  attributes :id, :title, :body, :reserve_price, :end_date, :created_at, :updated_at

  belongs_to :user, key: :author
  has_many :bids

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :price, :created_at, :updated_at
    belongs_to :user, key: :author
  end

end
