import { useAppDispatch } from 'custom-hooks'
import { close, open } from './alert-slice'
import { useCallback } from 'react'
import { AlertTypeEnum } from './alert-type-enum'

export function useAlert() {
  const dispatch = useAppDispatch()

  const openSuccessAlert = useCallback(
    (body: string) => {
      dispatch(
        open({
          type: AlertTypeEnum.SUCCESS,
          title: 'Success',
          body,
          open: true
        })
      )
    },
    [dispatch]
  )

  const openFailAlert = useCallback(
    (body: string) => {
      dispatch(
        open({
          type: AlertTypeEnum.ERROR,
          title: 'Error',
          body,
          open: true
        })
      )
    },
    [dispatch]
  )

  const closeAlert = useCallback(() => {
    dispatch(close())
  }, [dispatch])

  return { openSuccessAlert, openFailAlert, closeAlert }
}
