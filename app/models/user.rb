class User < ActiveRecord::Base
  has_secure_password

  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :gifs
end
