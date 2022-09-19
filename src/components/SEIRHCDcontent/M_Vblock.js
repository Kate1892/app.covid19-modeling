// import React from 'react'
// import { SubBlock } from './SubBlock'

// export const M_Vblock = () => {
//   return (
//     <>
//       <Collapse in={openM}>
//         <div id='example-collapse-text'>
//           {SubBlocksInfo.map(el => (
//             <SubBlock
//               title={el.title}
//               navFun={el.navF}
//               chartId={el.chartId}
//               chartOptions={el.chartOptions}
//               chartData={el.chartData}
//               block={el.block}
//             />
//           ))}

//           <SubBlock
//             title={'Кривые SEIRHCD и реальные данные'}
//             navFun={fetchSeirhcdData}
//             chartId={'chart4'}
//             chartOptions={chartOptions}
//             chartData={chartData_T}
//             block={'train'}
//           />

//           {status === 'success' ? (
//             <SubBlock
//               title={
//                 'Базовый индекс репродукции COVID-19 в Новосибирской области'
//               }
//               chartId={'chart5'}
//               chartOptions={chartOptions_R0_}
//               chartData={chartData_tR0}
//             />
//           ) : (
//             ''
//           )}
//           {status === 'success' ? (
//             <SubBlock
//               title={
//                 'Восстановленные параметры модели COVID-19 для Новосибирской области'
//               }
//               chartId={'chart8'}
//               chartOptions={chartOptions_P_}
//               chartData={chartData_tP}
//             />
//           ) : (
//             ''
//           )}
//         </div>
//       </Collapse>
//     </>
//   )
// }
