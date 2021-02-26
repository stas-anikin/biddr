class User < ApplicationRecord
  has_many :auctions, dependent: :nullify
  has_many :bids, dependent: :nullify
  has_secure_password
  validates :first_name, :last_name, presence: true
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: true, format: { with: VALID_EMAIL_REGEX }

  def full_name
    "#{first_name} #{last_name}".strip
  end
end
