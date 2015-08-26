class  User < ActiveRecord::Base
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, uniqueness: true

  before_validation :set_default_role, :if => :new_record?

  def set_default_role
    unless self.role
      self.role = :user
    end
  end


end