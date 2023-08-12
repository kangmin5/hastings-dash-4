import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ImageVo } from 'app/systems/mo/image-mo/image-vo'
interface ImageState {
  item: ImageVo
}
const initialState: ImageState = {
  item: new ImageVo()
}
const ImageReducer = createSlice({
  name: `image`,
  initialState,
  reducers: {
    saveImage(state, action: PayloadAction<ImageVo>) {
      state.item = action.payload
    }
  }
})

export const { saveImage } = ImageReducer.actions
export const imageReducer = ImageReducer.reducer
