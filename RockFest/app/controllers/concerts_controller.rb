class ConcertsController < ApplicationController

	def new
		@concert = Concert.new
	end

	def create
		@concert = Concert.new(concert_params)
		if @concert.valid?
			@concert.save
			redirect_to concerts_path
		else 
			render :new
		end
	end

	def index
		@concerts = Concert.live_today
		@this_month = Concert.later_this_month
	end

	def show
		@concert = Concert.find(params[:id])
	end

	def edit
		@concert = Concert.find_by(id: params[:id])
		render :new
	end

	def destroy
		Concert.find(params[:id]).destroy
		redirect_to concerts_path
	end

	def library
		@concerts = Concert.all.order(band: :asc)
	end

	private

	def concert_params
		params.require(:concert).permit(:band, :city, :venue, :date, :price, :description, :logo)
	end

end