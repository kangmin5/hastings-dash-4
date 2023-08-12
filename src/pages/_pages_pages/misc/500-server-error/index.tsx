// ** React Imports
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from '@core/layouts/BlankLayout'

// ** Component Import
import Error500 from 'app/general-affairs/troubleshooter/errors/500'

const Error = () => <Error500 />

Error.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Error
