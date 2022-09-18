import React from 'react'
import { Alert } from 'react-bootstrap'

export const Plugs = () => {
  return (
    <div
      style={{
        height: '350px',
      }}
    >
      <Alert relative='true' variant='danger' className='my-5'>
        {' '}
        <Alert.Heading>Ошибка загрузки</Alert.Heading>
        Сервер временно не отвечает, пожалуйста,{' '}
        <Alert.Link href='/modeling'>обновите страницу</Alert.Link> или
        повторите попытку позже.
        <hr />{' '}
      </Alert>{' '}
    </div>
  )
}
