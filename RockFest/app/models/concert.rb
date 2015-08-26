class Concert < ActiveRecord::Base

	has_attached_file :logo, styles: {:medium => "300x300>", :thumb => "100x100>"}
  	validates_attachment_content_type :logo, :content_type => /\Aimage\/.*\z/

	validates_presence_of :band, :city, :venue, :date, :price, :description 

	def self.live_today(date = Date.current)
    	order("band ASC").where("date = ?", date).limit(5)
  	end

  	def self.later_this_month(date = Date.current)
  		upcoming.where("date <= ?", date.end_of_month) 
  	end

  	def self.upcoming(date = Date.current)
  		where("date > ?", date)
  	end

end