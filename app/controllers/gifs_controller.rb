class GifsController < ApplicationController
  # GET /gifs/new
  def new
    @gif = Gif.new
  end

  # POST /gifs
  def create
    @gif = Gif.new(gif_params)

    if @gif.save
      redirect_to @gif, notice: 'Gif was successfully created.'
    else
      render :new
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_gif
    @gif = Gif.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def gif_params
    params.require(:gif).permit(:user_id, :category_id)
  end
end
