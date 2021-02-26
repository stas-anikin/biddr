class AuctionCollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :reserve_price, :end_date, :created_at, :updated_at
  belongs_to :user, key: :author
end
