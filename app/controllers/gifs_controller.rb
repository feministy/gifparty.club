class GifsController < ApplicationController
  # GET /gifs/new
  def new
    permission_denied unless current_user
    @gif = Gif.new
    @categories = Category.all
  end

  # POST /gifs
  def create
    @gif = Gif.new(gif_params.merge(user_id: current_user.id))

    if @gif.save
      redirect_to current_user, notice: 'Gif was successfully created.'
    else
      @categories = Category.all
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
    params.require(:gif).permit(:image, :image_file, :category_id)
  end
end
