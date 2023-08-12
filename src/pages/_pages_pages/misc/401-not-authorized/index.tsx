// ** React Imports
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from '@core/layouts/BlankLayout'

// ** Component Import
import Error401 from 'app/general-affairs/troubleshooter/errors/repository/error401'

const Error = () => <Error401 />

Error.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Error
