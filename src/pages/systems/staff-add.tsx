import React from 'react';
import type { GetStaticProps, NextPage } from "next"
import {
  Box,
  Button,
  IconButton,
  Card,
  FormControlLabel,
  Select,
  Radio,
  RadioGroup,
  MenuItem,
  FormGroup,
  Checkbox,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'
import { LoadingButton } from '@mui/lab';
import { Controller, useFormContext } from 'react-hook-form';

const StaffZoo = object({
  name: string()
    .nonempty('이름은 필수값입니다.')
    .max(32, '이름은 4자리수 미만입니다.'),
  email: string().nonempty('이메일은 필수값입니다.').email('이메일 형식에 부합됩니다.'),
  password: string()
    .nonempty('비밀번호는 필수값입니다.')
    .min(8, '비밀번호는 8글자 이상입니다.')
    .max(24, '비밀번호는 24글자 미만입니다.'),
  passwordConfirm: string().nonempty('비밀번호 확인 바랍니다.'),
  terms: literal(true, {
    invalid_type_error: '정보제공에 동의해야 합니다.',
  }),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: '비밀번호가 일치하지 않습니다.',
});
type StaffZoom = z.infer<typeof StaffZoo> & { unusedProperty: string };

const StaffAddPage: NextPage = () => {

  const [loading, setLoading] = React.useState(false);

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
    control,
  } = useForm<StaffZoom>({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "Y",
      password: "all",
      passwordConfirm: "N",
      terms: true
    },
    resolver: zodResolver(StaffZoo),
  });

  const onSubmit: SubmitHandler<any> = (data) => {


  }

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmitHandler: SubmitHandler<StaffZoom> = (data) => {
    console.log(data);
  };

  console.log('에러발생 : ',errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <Box sx={{ maxWidth: '30rem' }}>
      <Typography variant='h4' component='h1' sx={{ mb: '2rem' }}>
        Staff
      </Typography>

        <Box >
<Controller
rules={{ required: true }}
control={control}
name="name"
defaultValue={''}
render={(
  {
    field: { value, onChange, onBlur, ref },
    fieldState: { error },
  }
) => (
        <FormControl component="fieldset" >
        <TextField
          variant='outlined'
          name="name"
          placeholder="이름"
          inputRef={ref}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={Boolean(error)}
          sx={{ width: '600px' }}/>
          <FormHelperText
                        sx={{
                          color: 'error.main',
                        }}
                      >
                        {error?.message ?? ''}
                      </FormHelperText>
         </FormControl>
)}/>

<Controller
rules={{ required: true }}
control={control}
name="email"
defaultValue={''}
render={(
  {
    field: { value, onChange, onBlur, ref },
    fieldState: { error },
  }
) => (
        <FormControl component="fieldset" >
        <TextField
          variant='outlined'
          name="email"
          placeholder="이메일"
          inputRef={ref}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={Boolean(error)}
          sx={{ width: '600px' }}/>
          <FormHelperText
                        sx={{
                          color: 'error.main',
                        }}
                      >
                        {error?.message ?? ''}
                      </FormHelperText>
         </FormControl>
)}/>
          <Controller
rules={{ required: true }}
control={control}
name="password"
defaultValue={''}
render={(
  {
    field: { value, onChange, onBlur, ref },
    fieldState: { error },
  }
) => (
        <FormControl component="fieldset" >
        <TextField
          variant='outlined'
          name="password"
          placeholder="비밀번호"
          inputRef={ref}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={Boolean(error)}
          sx={{ width: '600px' }}/>
          <FormHelperText
                        sx={{
                          color: 'error.main',
                        }}
                      >
                        {error?.message ?? ''}
                      </FormHelperText>
         </FormControl>
)}/>
          <Controller
rules={{ required: true }}
control={control}
name="passwordConfirm"
defaultValue={''}
render={(
  {
    field: { value, onChange, onBlur, ref },
    fieldState: { error },
  }
) => (
        <FormControl component="fieldset" >
        <TextField
          variant='outlined'
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          inputRef={ref}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={Boolean(error)}
          sx={{ width: '600px' }}/>
          <FormHelperText
                        sx={{
                          color: 'error.main',
                        }}
                      >
                        {error?.message ?? ''}
                      </FormHelperText>
         </FormControl>
)}/>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox required />}
              value={true}
              label={
                <Typography color={errors['terms'] ? 'error' : 'inherit'}>
                  정보 동의
                </Typography>
              }
            />
            <FormHelperText error={!!errors['terms']}>
              {errors['terms'] ? errors['terms'].message : ''}
            </FormHelperText>
          </FormGroup>

          <LoadingButton
            variant='contained'
            fullWidth
            type='submit'
            loading={loading}
            sx={{ py: '0.8rem', mt: '1rem' }}
          >
            등록
          </LoadingButton>
        </Box>

    </Box>
    </form>
  );
};

export default StaffAddPage


//** https://codevoweb.com/form-validation-react-hook-form-material-ui-react/ */
