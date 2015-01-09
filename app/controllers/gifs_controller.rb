class GifsController < ApplicationController
  before_action :set_gif, only: [:show, :edit, :update, :destroy]

  # GET /gifs
  def index
    @gifs = Gif.all
  end

  # GET /gifs/1
  def show
  end

  # GET /gifs/new
  def new
    @gif = Gif.new
  end

  # GET /gifs/1/edit
  def edit
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

  # PATCH/PUT /gifs/1
  def update
    if @gif.update(gif_params)
      redirect_to @gif, notice: 'Gif was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /gifs/1
  def destroy
    @gif.destroy
    redirect_to gifs_url, notice: 'Gif was successfully destroyed.'
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
