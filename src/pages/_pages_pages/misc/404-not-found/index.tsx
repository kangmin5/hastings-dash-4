// ** React Imports
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from '@core/layouts/BlankLayout'

// ** Component Import
import Error404 from 'app/general-affairs/troubleshooter/errors/404'

const Error = () => <Error404 />

Error.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Error
