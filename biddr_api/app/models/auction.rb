class Auction < ApplicationRecord
  belongs_to :user
  has_many :bids, dependent: :destroy
  before_save :capitalize_title
  validates :title, presence: true
  validates :body, presence: true, length: { minimum: 5 }
  validates :end_date, presence: true
  validates :reserve_price, numericality: { greater_than: 0 }

  private

  def capitalize_title
    self.title.capitalize!
  end
end
