import React from 'react'
import { BsDownload } from 'react-icons/bs'
import { Stack, OverlayTrigger, Popover } from 'react-bootstrap'

export const SEIRHCD_realDataDesc = () => {
  return (
    <>
      <Stack direction='horizontal' gap={3}>
        <div className=''>
          {' '}
          <div>
            <i>
              f<sub>k</sub>
            </i>{' '}
            – количество выявленных случаев COVID-19 в день <i>k</i>
          </div>
        </div>
        <OverlayTrigger
          placement='left'
          overlay={
            <Popover className='shadow1'>
              <Popover.Body>
                <small className='text-muted'>2 столбец - new_diagnoses</small>
              </Popover.Body>
            </Popover>
          }
        >
          <div className=' ms-auto'>2</div>
        </OverlayTrigger>
        <div className='vr' />
        <a
          href='https://covid19-modeling.ru/data/novosibirsk-region-data.csv'
          style={{ textDecoration: 'none' }}
          className=''
        >
          <div className=''>
            <BsDownload />
          </div>
        </a>
      </Stack>
      <hr />
      <Stack direction='horizontal' gap={3}>
        <div className=''>
          {' '}
          <div>
            <i>
              b<sub>k</sub>
            </i>{' '}
            – процент бессимптомных выявленных в день <i>k</i>
          </div>
        </div>
        <OverlayTrigger
          placement='left'
          overlay={
            <Popover className='shadow1'>
              <Popover.Body>
                <small className='text-muted'>
                  22 столбец - asympt_percent
                </small>
              </Popover.Body>
            </Popover>
          }
        >
          <div className=' ms-auto'>22</div>
        </OverlayTrigger>
        <div className='vr' />
        <a
          href='https://covid19-modeling.ru/data/novosibirsk-region-data.csv'
          style={{ textDecoration: 'none' }}
          className=''
        >
          <div className=''>
            <BsDownload />
          </div>
        </a>
      </Stack>
      <hr />
      <Stack direction='horizontal' gap={3}>
        <div className=''>
          {' '}
          <div>
            <i>
              C<sub>k</sub>
            </i>{' '}
            – количество критических случаев COVID-19 в день <i>k</i>,
            нуждающихся в подключении аппарата ИВЛ
          </div>
        </div>
        <OverlayTrigger
          placement='left'
          overlay={
            <Popover className='shadow1'>
              <Popover.Body>
                <small className='text-muted'>16 столбец - ventilation</small>
              </Popover.Body>
            </Popover>
          }
        >
          <div className=' ms-auto'>16</div>
        </OverlayTrigger>
        <div className='vr' />
        <a
          href='https://covid19-modeling.ru/data/novosibirsk-region-data.csv'
          style={{ textDecoration: 'none' }}
          className=''
        >
          <div className=''>
            <BsDownload />
          </div>
        </a>
      </Stack>
      <hr />
      <Stack direction='horizontal' gap={3}>
        <div className=''>
          {' '}
          <div>
            <i>
              g<sub>k</sub>
            </i>{' '}
            – количество умерших в результате COVID-19 в день <i>k</i>
          </div>
        </div>
        <OverlayTrigger
          placement='left'
          overlay={
            <Popover className='shadow1'>
              <Popover.Body>
                <small className='text-muted'>7 столбец - new_deaths</small>
              </Popover.Body>
            </Popover>
          }
        >
          <div className=' ms-auto'>7</div>
        </OverlayTrigger>
        <div className='vr' />
        <a
          href='https://covid19-modeling.ru/data/novosibirsk-region-data.csv'
          style={{ textDecoration: 'none' }}
          className=''
        >
          <div className=''>
            <BsDownload />
          </div>
        </a>
      </Stack>
      <hr />
      <Stack direction='horizontal' gap={3}>
        <div className=''>
          {' '}
          <div>
            <i>{'\u03B1'}(t)</i> – индекс самоизоляции
          </div>
        </div>
        <OverlayTrigger
          placement='left'
          overlay={
            <Popover className='shadow1'>
              <Popover.Body>
                <small className='text-muted'>21 столбец - yandex_index</small>
              </Popover.Body>
            </Popover>
          }
        >
          <div className=' ms-auto'>21</div>
        </OverlayTrigger>
        <div className='vr' />
        <a
          href='https://covid19-modeling.ru/data/novosibirsk-region-data.csv'
          style={{ textDecoration: 'none' }}
          className=''
        >
          <div className=''>
            <BsDownload />
          </div>
        </a>
      </Stack>
      <hr />
      <Stack direction='horizontal' gap={3}>
        <div className=''>
          {' '}
          <div>
            <i>{'\u03B2'}(t)</i> – доля инфицированных, имеющая антитела IgG к
            SARS-CoV-2
          </div>
        </div>
        <OverlayTrigger
          placement='left'
          overlay={
            <Popover className='shadow1'>
              <Popover.Body>
                <small className='text-muted'>
                  2 столбец - positive_percent
                </small>
              </Popover.Body>
            </Popover>
          }
        >
          <div className=' ms-auto'>2</div>
        </OverlayTrigger>
        <div className='vr' />
        <a
          href='https://covid19-modeling.ru/data/novosibirsk-invitro.csv'
          style={{ textDecoration: 'none' }}
        >
          <div className=''>
            <BsDownload />
          </div>
        </a>
      </Stack>
    </>
  )
}
