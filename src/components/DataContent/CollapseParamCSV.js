import { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Stack, Overlay } from 'react-bootstrap'

export function CollapseParamCSV({ dataArray, strInfo }) {
  const [show, setShow] = useState(false)
  const target = useRef(null)

  return (
    <>
      <div className=''>
        <div className='d-grid gap-2'>
          <Button
            size='sm'
            variant='outline-success'
            ref={target}
            onClick={() => setShow(!show)}
            className='shadow1'
          >
            Описание данных
          </Button>

          <Overlay target={target.current} show={show} placement='bottom'>
            {({ placement, arrowProps, show: _show, popper, ...props }) => (
              <div
                {...props}
                style={{
                  position: 'absolute',
                  backgroundColor: 'rgba(192,192,192, 0.90)',
                  padding: '2px 10px',
                  color: 'white',
                  borderRadius: 3,
                  ...props.style,
                }}
              >
                {dataArray && (
                  <Stack gap={16}>
                    {dataArray.map(elem => (
                      <div key={elem.key}>
                        <Stack direction='horizontal' gap={1}>
                          <div className='mx-1'>
                            <small>{elem.name}</small>
                          </div>
                          <div className=''>
                            <small>{elem.description}</small>
                          </div>
                        </Stack>
                      </div>
                    ))}
                  </Stack>
                )}

                {strInfo && (
                  <Container className='mx-auto'> {strInfo} </Container>
                )}
              </div>
            )}
          </Overlay>
        </div>
      </div>
    </>
  )
}
