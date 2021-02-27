class Auction < ApplicationRecord
  has_many(:bids, dependent: :destroy)
  belongs_to :user
  before_validation :set_default_reserve_price

  scope :viewable, -> { 
    where(aasm_state: [:published, :reserve_met])
  }

  include AASM

  aasm whiny_transitions: false do
    state :draft, initial: true
    state :published
    state :reserve_met

    event :publish do
      transitions from: :draft, to: :published
    end

    event :reserve_minimum do
      transitions from: :published, to: :reserve_met
    end
  end

  private

  def set_default_reserve_price

    self.reserve_price ||= 1
  end

end
