import React from 'react'
import ViewVehicle from './ViewVehicle'

export default function page(props: any) {
    const {params} = props
    const vehicleId =params.id
    
  return (
    <ViewVehicle vehicleId={vehicleId}/>
  )
}
