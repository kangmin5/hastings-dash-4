import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CompanyVo } from 'app/systems/mo/company-mo/company-vo'
interface CompanyState {
  item: CompanyVo
}
const initialState: CompanyState = {
  item: new CompanyVo()
}
const CompanyReducer = createSlice({
  name: `company`,
  initialState,
  reducers: {
    saveCompany(state, action: PayloadAction<CompanyVo>) {
      state.item = action.payload
    }
  }
})

export const { saveCompany } = CompanyReducer.actions
export const companyReducer = CompanyReducer.reducer
