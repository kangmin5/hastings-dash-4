// ** Demo Components Imports
import Edit from 'views/apps/invoice/edit/Edit'

// ** Styled Component
import DatePickerWrapper from '@core/styles/libs/react-datepicker'

const InvoiceEdit = () => {
  return (
    <DatePickerWrapper sx={{ '& .react-datepicker-wrapper': { width: 'auto' } }}>
      <Edit id='4987' />
    </DatePickerWrapper>
  )
}

export default InvoiceEdit
